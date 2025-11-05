import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    console.log('[Chat API] ===== New Request =====');
    const body = await request.json();
    const { message, conversationId, parentMessageId } = body;
    
    console.log('[Chat API] Request body:', JSON.stringify(body));

    if (!message || typeof message !== 'string') {
      console.error('[Chat API] Invalid message format');
      return NextResponse.json(
        { error: 'Message is required' },
        { status: 400 }
      );
    }

    console.log('[Chat API] Message:', message);
    console.log('[Chat API] ConversationId:', conversationId);

    // Get LibreChat configuration from environment
    const LIBRECHAT_BASE_URL = process.env.LIBRECHAT_API_URL || process.env.NEXT_PUBLIC_LIBRECHAT_URL;
    const LIBRECHAT_API_KEY = process.env.LIBRECHAT_API_KEY; // Optional API key
    
    if (!LIBRECHAT_BASE_URL) {
      console.error('[Chat API] No LibreChat URL configured');
      return NextResponse.json(
        { error: 'Chat service not configured. Please set LIBRECHAT_API_URL in environment variables.' },
        { status: 503 }
      );
    }
    
    console.log('[Chat API] LibreChat Base URL:', LIBRECHAT_BASE_URL);
    console.log('[Chat API] Has API Key:', !!LIBRECHAT_API_KEY);
    
    // Construct the proper LibreChat API endpoint
    const apiEndpoint = LIBRECHAT_BASE_URL.includes('/api/') 
      ? LIBRECHAT_BASE_URL 
      : `${LIBRECHAT_BASE_URL}/api/ask`;
    
    console.log('[Chat API] Full API endpoint:', apiEndpoint);
    
    // Format request for LibreChat API
    // LibreChat /api/ask expects this structure
    const librechatPayload = {
      text: message, // LibreChat uses 'text' field
      conversationId: conversationId || null,
      parentMessageId: parentMessageId || '00000000-0000-0000-0000-000000000000',
      model: 'gpt-4o-mini', // Your instance uses this model
      endpoint: 'openAI',
      // Add preset if needed
      // modelLabel: 'SeveralX Consulting AI',
    };
    
    console.log('[Chat API] LibreChat payload:', JSON.stringify(librechatPayload));
    
    // Prepare headers
    const headers: Record<string, string> = {
      'Content-Type': 'application/json',
      'Accept': 'application/json, text/event-stream',
    };
    
    // Add API key if available
    if (LIBRECHAT_API_KEY) {
      headers['Authorization'] = `Bearer ${LIBRECHAT_API_KEY}`;
      console.log('[Chat API] Using API Key authentication');
    } else {
      // Forward cookies for session-based authentication
      const cookies = request.headers.get('cookie');
      if (cookies) {
        headers['Cookie'] = cookies;
        console.log('[Chat API] Using cookie-based authentication');
      } else {
        console.warn('[Chat API] No authentication method available');
      }
    }
    
    // Forward the request to your chat backend
    console.log('[Chat API] Forwarding to backend...');
    const response = await fetch(apiEndpoint, {
      method: 'POST',
      headers,
      body: JSON.stringify(librechatPayload),
    });

    console.log('[Chat API] Backend response status:', response.status);
    const responseHeaders = Object.fromEntries(response.headers.entries());
    console.log('[Chat API] Backend response headers:', responseHeaders);

    // Check content type FIRST - LibreChat returns HTML when not authenticated
    const contentType = response.headers.get('content-type') || '';
    console.log('[Chat API] Content-Type:', contentType);

    // If we got HTML back, it means we're not authenticated (got redirected to login page)
    if (contentType.includes('text/html')) {
      console.error('[Chat API] Received HTML instead of JSON - authentication required');
      const htmlSnippet = await response.text().then(t => t.substring(0, 200)).catch(() => 'HTML page');
      console.error('[Chat API] HTML response snippet:', htmlSnippet);
      
      return NextResponse.json(
        { 
          error: 'Authentication required. Please log in to LibreChat first.',
          details: 'You need to log in to LibreChat before using the chat. Open a new tab and visit: ' + LIBRECHAT_BASE_URL,
          librechatUrl: LIBRECHAT_BASE_URL,
          action: 'login_required'
        },
        { status: 401 }
      );
    }

    if (!response.ok) {
      const errorText = await response.text().catch(() => 'Unknown error');
      console.error('[Chat API] Backend error response:', errorText);
      
      // Provide specific error messages
      if (response.status === 401) {
        return NextResponse.json(
          { error: 'Authentication required. Please log in to LibreChat first at ' + LIBRECHAT_BASE_URL },
          { status: 401 }
        );
      } else if (response.status === 403) {
        return NextResponse.json(
          { error: 'Access forbidden. Check your LibreChat permissions.' },
          { status: 403 }
        );
      } else {
        return NextResponse.json(
          { 
            error: `LibreChat returned error ${response.status}`,
            details: errorText.substring(0, 200),
            librechatUrl: LIBRECHAT_BASE_URL
          },
          { status: response.status }
        );
      }
    }

    // Check if the response is a stream (LibreChat typically streams responses)
    if (contentType.includes('text/event-stream')) {
      console.log('[Chat API] Streaming response detected');
      
      // For now, we'll collect the stream and return as JSON
      // You can modify this to forward the stream directly if needed
      const reader = response.body?.getReader();
      const decoder = new TextDecoder();
      let fullText = '';
      let lastConversationId = conversationId;
      let lastMessageId = '';
      
      if (reader) {
        while (true) {
          const { done, value } = await reader.read();
          if (done) break;
          
          const chunk = decoder.decode(value);
          const lines = chunk.split('\n');
          
          for (const line of lines) {
            if (line.startsWith('data: ')) {
              try {
                const data = JSON.parse(line.substring(6));
                if (data.text) {
                  fullText = data.text;
                }
                if (data.conversationId) {
                  lastConversationId = data.conversationId;
                }
                if (data.messageId) {
                  lastMessageId = data.messageId;
                }
                // Check if final message
                if (data.final) {
                  break;
                }
              } catch (e) {
                // Skip invalid JSON
              }
            }
          }
        }
      }
      
      console.log('[Chat API] Stream complete. Text length:', fullText.length);
      return NextResponse.json({
        message: fullText || 'Response received',
        conversationId: lastConversationId,
        messageId: lastMessageId,
        parentMessageId: parentMessageId,
      });
    }

    // Handle JSON response
    const data = await response.json();
    console.log('[Chat API] Backend response data:', JSON.stringify(data).substring(0, 200));
    
    // Transform LibreChat response to our format
    const transformedResponse = {
      message: data.text || data.message || data.response || 'Received your message',
      conversationId: data.conversationId || conversationId,
      messageId: data.messageId || data.id,
      parentMessageId: data.parentMessageId || parentMessageId,
    };
    
    console.log('[Chat API] Returning transformed response');
    return NextResponse.json(transformedResponse);
  } catch (error) {
    console.error('[Chat API] Exception caught:', error);
    console.error('[Chat API] Error stack:', error instanceof Error ? error.stack : 'No stack trace');
    
    return NextResponse.json({
      error: 'Internal server error',
      details: error instanceof Error ? error.message : 'Unknown error',
    }, { status: 500 });
  }
}

