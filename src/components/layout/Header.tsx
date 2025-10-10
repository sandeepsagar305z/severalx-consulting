"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Menu } from "lucide-react";

/**
 * Reusable demo booking dialog content component to avoid duplication
 */
const DemoBookingDialogContent = () => (
  <DialogContent className="max-w-4xl h-[80vh] p-0">
    <iframe
      src="https://outlook.office.com/book/SeveralInnovations1@severalmillers.com"
      className="w-full h-full rounded-lg"
      title="Book a Demo"
      allow="fullscreen"
    />
  </DialogContent>
);

// Navigation menu items with their corresponding section IDs
const navigation = [
  { name: "Solutions", href: "#products" },
  { name: "Consulting Verticals", href: "#consulting-verticals" },
  { name: "Resources", href: "#resources" },
  { name: "About Us", href: "#about" },
  { name: "Insights", href: "#insights" },
  { name: "Contact Us", href: "#contact" },
];

/**
 * Header component with navigation, logo, and demo booking functionality
 * Includes responsive mobile menu and animated elements
 */
export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDemoDialogOpen, setIsDemoDialogOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center"
          >
            <Link href="/" className="flex items-center">
              <Image
                src="/logo.png"
                alt="Severalx Consulting"
                width={32}
                height={32}
                className="h-22 w-42 object-contain"
                unoptimized
              />
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="hidden md:flex items-center space-x-8"
          >
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.name}
              </a>
            ))}
          </motion.nav>

          {/* Desktop CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hidden md:flex items-center space-x-4"
          >
            <Button variant="ghost" size="sm">
              Sign In
            </Button>
            <Dialog open={isDemoDialogOpen} onOpenChange={setIsDemoDialogOpen}>
              <DialogTrigger asChild>
                <Button size="sm" className="bg-gradient-to-r from-black to-black hover:from-green-700 hover:to-green-600">
                  Book a Demo
                </Button>
              </DialogTrigger>
              <DemoBookingDialogContent />
            </Dialog>
          </motion.div>

          {/* Mobile menu button */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="sm">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col space-y-4 mt-4">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-lg font-medium text-muted-foreground hover:text-foreground transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
                <div className="flex flex-col space-y-2 pt-4 border-t">
                  <Button variant="ghost" className="justify-start">
                    Sign In
                  </Button>
                  <Dialog open={isDemoDialogOpen} onOpenChange={setIsDemoDialogOpen}>
                    <DialogTrigger asChild>
                      <Button
                        className="justify-start bg-gradient-to-r from-black to-black hover:from-green-700 hover:to-green-600"
                        onClick={() => setIsOpen(false)}
                      >
                        Book a Demo
                      </Button>
                    </DialogTrigger>
                    <DemoBookingDialogContent />
                  </Dialog>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
