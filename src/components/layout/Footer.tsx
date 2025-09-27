"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Twitter, Linkedin, Github, Youtube } from "lucide-react";

const footerSections = [
  {
    title: "Quick Links",
    links: [
      { name: "Solutions", href: "#products" },
      { name: "Resources", href: "#resources" },
      { name: "About Us", href: "#about" },
      { name: "Insights", href: "#insights" },
      { name: "Contact Us", href: "#contact" },
    ],
  },
  {
    title: "Resources",
    links: [
      { name: "Software Assurance", href: "#software-assurance" },
      { name: "Professional Resources", href: "#professional-resources" },
      { name: "Training Programs", href: "#training" },
      { name: "Technical Support", href: "#support" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { name: "Digital Transformation", href: "#digital-transformation" },
      { name: "Business Management", href: "#business-management" },
      { name: "Process Automation", href: "#automation" },
      { name: "Client Management", href: "#client-management" },
    ],
  },
];

const socialLinks = [
  { name: "Twitter", icon: Twitter, href: "#" },
  { name: "LinkedIn", icon: Linkedin, href: "#" },
  { name: "GitHub", icon: Github, href: "#" },
  { name: "YouTube", icon: Youtube, href: "#" },
];

export function Footer() {
  return (
    <footer className="bg-white border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="md:col-span-2 lg:col-span-2"
          >
            <Link href="/" className="flex items-center mb-4">
              <Image
                src="/logo.png"
                alt="Severalx Consulting"
                width={32}
                height={32}
                className="h-22 w-42 object-contain"
                unoptimized
              />
            </Link>
            <p className="text-sm text-muted-foreground mb-6 max-w-sm">
              Optimizing supply chains across Asia, South America, and the United States.
              Expert technology consulting for digital transformation and business growth.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <social.icon className="h-5 w-5" />
                  <span className="sr-only">{social.name}</span>
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col"
            >
              <h3 className="font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12 pt-8 border-t flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0"
        >
          <div className="flex items-center gap-2">
            <Image
              src="/logo.png"
              alt="Severalx Consulting"
              width={16}
              height={16}
              className="object-contain"
              unoptimized
            />
            <p className="text-sm text-muted-foreground">
              © 2025 Severalx Consulting. All rights reserved.
            </p>
          </div>
          <div className="flex flex-wrap justify-center sm:justify-end space-x-6 mt-0">
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Cookie Policy
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
