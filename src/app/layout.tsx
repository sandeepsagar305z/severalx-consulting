import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

// Configure Google Fonts for the application
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// SEO metadata for the website
export const metadata: Metadata = {
  title: "Severalx Consulting - Technology Platform & Consulting Resources",
  description: "Empower your business with cutting-edge technology solutions and expert consulting services. Transform operations with our comprehensive platform.",
  keywords: "technology consulting, digital transformation, software solutions, business consulting, tech platform",
  authors: [{ name: "Severalx Consulting" }],
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
    ],
  },
  openGraph: {
    title: "Severalx Consulting - Technology Platform & Consulting Resources",
    description: "Empower your business with cutting-edge technology solutions and expert consulting services.",
    type: "website",
  },
};

// Viewport configuration for mobile responsiveness
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

/**
 * Root layout component that wraps all pages with header, footer, and global styling
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 relative`}
      >
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
