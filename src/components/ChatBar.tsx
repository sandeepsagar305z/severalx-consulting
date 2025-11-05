"use client";

import { useState, useRef, useEffect } from 'react';
import { MessageCircle, Send, Loader2 } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { cn } from '@/lib/utils';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
  messageId?: string; // LibreChat message ID
}

export function ChatBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [conversationId, setConversationId] = useState<string | null>(null);
  const [parentMessageId, setParentMessageId] = useState<string>('00000000-0000-0000-0000-000000000000');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    console.log('ChatBar mounted successfully');
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Don't render on server
  if (!isMounted) {
    return null;
  }

  const sendMessage = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: input.trim(),
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      console.log('Sending message to /api/chat/assistant:', userMessage.content);
      console.log('ConversationId:', conversationId);
      console.log('ParentMessageId:', parentMessageId);
      
      const response = await fetch('/api/chat/assistant', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({
          message: userMessage.content,
          conversationId,
          parentMessageId,
        }),
      });

      console.log('Response status:', response.status);

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        console.error('API error:', errorData);
        
        // Special handling for authentication errors
        if (response.status === 401 && errorData.action === 'login_required') {
          const librechatUrl = errorData.librechatUrl || 'https://chat.severalxconsulting.com';
          throw new Error(`Please log in to LibreChat first. Open ${librechatUrl} in a new tab, log in, then try again.`);
        }
        
        throw new Error(errorData.error || errorData.details || `Failed to send message (${response.status})`);
      }

      const data = await response.json();
      console.log('Response data:', data);
      
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: data.message || data.text || data.response || 'I received your message.',
        timestamp: new Date(),
        messageId: data.messageId,
      };

      setMessages((prev) => [...prev, assistantMessage]);
      
      // Update conversation state for next message
      if (data.conversationId) {
        setConversationId(data.conversationId);
      }
      if (data.messageId) {
        setParentMessageId(data.messageId); // Next message will be a reply to this one
      }
    } catch (error) {
      console.error('Error sending message:', error);
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: `Sorry, I encountered an error: ${error instanceof Error ? error.message : 'Please try again.'}`,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <>
      {/* Floating Chat Button */}
      <button
        onClick={() => {
          console.log('Chat button clicked');
          setIsOpen(true);
        }}
        className={cn(
          "fixed bottom-6 right-6 z-[100] p-4 rounded-full",
          "bg-gradient-to-r from-[#63b583] to-[#4a9666]",
          "text-white shadow-lg hover:shadow-xl",
          "hover:shadow-[#63b583]/30 transition-all duration-300",
          "hover:-translate-y-1 hover:scale-110",
          "focus:outline-none focus:ring-2 focus:ring-[#63b583] focus:ring-offset-2",
          isOpen && "hidden"
        )}
        aria-label="Open chat"
        title="Open Chat Assistant"
      >
        <MessageCircle className="w-6 h-6" />
      </button>

      {/* Chat Panel */}
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetContent 
          side="right" 
          className="w-full sm:max-w-md bg-gray-900 border-gray-700 p-0 flex flex-col"
        >
          <SheetHeader className="p-4 border-b border-gray-700">
            <SheetTitle className="text-white">Chat Assistant</SheetTitle>
            <SheetDescription className="text-gray-400">
              Ask me anything about our services
            </SheetDescription>
          </SheetHeader>

          {/* Messages Container */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.length === 0 ? (
              <div className="flex items-center justify-center h-full text-gray-500">
                <p>Start a conversation!</p>
              </div>
            ) : (
              messages.map((message) => (
                <div
                  key={message.id}
                  className={cn(
                    "flex",
                    message.role === 'user' ? 'justify-end' : 'justify-start'
                  )}
                >
                  <div
                    className={cn(
                      "max-w-[80%] rounded-lg px-4 py-2",
                      message.role === 'user'
                        ? 'bg-gradient-to-r from-[#63b583] to-[#4a9666] text-white'
                        : 'bg-gray-800 text-gray-100 border border-gray-700'
                    )}
                  >
                    <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                    <span className="text-xs opacity-70 mt-1 block">
                      {message.timestamp.toLocaleTimeString([], {
                        hour: '2-digit',
                        minute: '2-digit',
                      })}
                    </span>
                  </div>
                </div>
              ))
            )}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-2">
                  <Loader2 className="w-4 h-4 animate-spin text-[#63b583]" />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-4 border-t border-gray-700">
            <div className="flex gap-2">
              <Textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Type your message..."
                className="flex-1 min-h-[60px] max-h-[120px] bg-gray-800 border-gray-700 text-white placeholder:text-gray-500 focus:border-[#63b583] resize-none"
                disabled={isLoading}
              />
              <Button
                onClick={sendMessage}
                disabled={!input.trim() || isLoading}
                className="bg-gradient-to-r from-[#63b583] to-[#4a9666] hover:from-[#4a9666] hover:to-[#63b583] text-white self-end"
              >
                {isLoading ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : (
                  <Send className="w-4 h-4" />
                )}
              </Button>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
}

