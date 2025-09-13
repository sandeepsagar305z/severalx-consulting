import { NextRequest } from 'next/server';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ width: string; height: string }> }
) {
  const { width, height } = await params;

  // Validate dimensions
  const w = parseInt(width);
  const h = parseInt(height);

  if (isNaN(w) || isNaN(h) || w <= 0 || h <= 0 || w > 1000 || h > 1000) {
    return new Response('Invalid dimensions', { status: 400 });
  }

  // Create a simple SVG placeholder
  const svg = `
    <svg width="${w}" height="${h}" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="placeholderTitle">
      <title id="placeholderTitle">Placeholder ${w}x${h}</title>
      <rect width="100%" height="100%" fill="#f3f4f6"/>
      <rect x="20" y="20" width="${w - 40}" height="${h - 40}" fill="#e5e7eb" stroke="#d1d5db" stroke-width="2"/>
      <text x="50%" y="50%" font-family="Arial, sans-serif" font-size="14" fill="#6b7280" text-anchor="middle" dy=".3em">
        ${w}×${h}
      </text>
    </svg>
  `;

  return new Response(svg, {
    headers: {
      'Content-Type': 'image/svg+xml',
      'Cache-Control': 'public, max-age=31536000',
    },
  });
}
