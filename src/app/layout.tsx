import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Severalx Consulting - Technology Platform & Consulting Services",
  description: "Empower your business with cutting-edge technology solutions and expert consulting services. Transform operations with our comprehensive platform.",
  keywords: "technology consulting, digital transformation, software solutions, business consulting, tech platform",
  authors: [{ name: "Severalx Consulting" }],
  openGraph: {
    title: "Severalx Consulting - Technology Platform & Consulting Services",
    description: "Empower your business with cutting-edge technology solutions and expert consulting services.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col bg-black bg-gradient-to-br from-black via-gray-900/80 to-black relative`}
      >
        {/* Enhanced Background Pattern */}
        <div className="fixed inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(99,181,131,0.08),transparent_70%)] pointer-events-none"></div>
        <div className="fixed inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(99,181,131,0.06),transparent_70%)] pointer-events-none"></div>
        <div className="fixed inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(99,181,131,0.04),transparent_80%)] pointer-events-none"></div>
        <div className="fixed inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none"></div>

        {/* Floating background elements */}
        <div className="fixed top-1/4 left-1/4 w-64 h-64 bg-[#63b583]/5 rounded-full blur-3xl animate-pulse pointer-events-none"></div>
        <div className="fixed bottom-1/3 right-1/3 w-48 h-48 bg-[#63b583]/3 rounded-full blur-2xl animate-pulse animation-delay-2000 pointer-events-none"></div>
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
