"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Menu, LogOut } from "lucide-react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { useAuthModal } from "@/context/AuthModalContext";
import {
  LibreChatUser,
  fetchLibreChatUser,
  getFirstName,
  readStoredUser,
  subscribeToAuthChanges,
  logoutFromLibreChat,
} from "@/lib/librechatSession";

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
  const [user, setUser] = useState<LibreChatUser | null>(null);
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  const { openAuthModal } = useAuthModal();

  useEffect(() => {
    let cancelled = false;

    const storedUser = readStoredUser();
    if (storedUser && !cancelled) {
      setUser(storedUser);
    }

    (async () => {
      const result = await fetchLibreChatUser();
      if (cancelled) {
        return;
      }
      if (result.ok) {
        setUser(result.user);
      }
      if (!result.ok && (result.status === 401 || result.status === 403)) {
        setUser(null);
      }
    })();

    const unsubscribe = subscribeToAuthChanges(({ user: detailUser }) => {
      if (cancelled) {
        return;
      }
      if (detailUser) {
        setUser(detailUser);
      }
      if (!detailUser) {
        setUser(null);
      }
    });

    return () => {
      cancelled = true;
      unsubscribe();
    };
  }, []);

  const greeting = getFirstName(user);
  const signInLabel = user ? `Hello, ${greeting ?? "there"}` : "Sign In";

  const handleSignIn = () => {
    if (user) {
      return;
    }

    openAuthModal("");
  };

  const handleLogout = async () => {
    if (isLoggingOut) {
      return;
    }

    setIsLoggingOut(true);
    try {
      await logoutFromLibreChat();
      setUser(null);
    } finally {
      setIsLoggingOut(false);
    }
  };

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
                className="h-18 w-36 object-contain"
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
            {user ? (
              <DropdownMenu.Root>
                <DropdownMenu.Trigger asChild>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="rounded-full bg-black/5 px-3 py-2 text-muted-foreground hover:bg-black/10 hover:text-muted-foreground"
                  >
                    {signInLabel}
                  </Button>
                </DropdownMenu.Trigger>
                <DropdownMenu.Portal>
                  <DropdownMenu.Content
                    sideOffset={10}
                    className="z-50 min-w-[180px] rounded-xl border border-black/10 bg-white/90 p-2 text-sm text-gray-700 shadow-2xl backdrop-blur-md"
                  >
                    <DropdownMenu.Item
                      onSelect={(event) => {
                        event.preventDefault();
                        void handleLogout();
                      }}
                      className="flex cursor-pointer items-center gap-2 rounded-lg px-3 py-2 text-red-600 transition-colors hover:bg-red-500/10 focus:bg-red-500/10 focus:outline-none"
                    >
                      <LogOut className="h-4 w-4" />
                      Log out
                    </DropdownMenu.Item>
                  </DropdownMenu.Content>
                </DropdownMenu.Portal>
              </DropdownMenu.Root>
            ) : (
              <Button variant="ghost" size="sm" onClick={handleSignIn}>
                {signInLabel}
              </Button>
            )}
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
                  {user ? (
                    <div className="flex flex-col gap-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="justify-start rounded-full bg-black/5 px-3 py-2 text-left text-muted-foreground hover:bg-black/10 hover:text-muted-foreground"
                        disabled
                      >
                        {signInLabel}
                      </Button>
                      <Button
                        variant="ghost"
                        className="justify-start text-red-500 hover:text-red-500"
                        onClick={() => {
                          setIsOpen(false);
                          void handleLogout();
                        }}
                        disabled={isLoggingOut}
                      >
                        <LogOut className="mr-2 h-4 w-4" /> Log out
                      </Button>
                    </div>
                  ) : (
                    <Button
                      variant="ghost"
                      className="justify-start"
                      onClick={() => {
                        setIsOpen(false);
                        handleSignIn();
                      }}
                    >
                      {signInLabel}
                    </Button>
                  )}
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
