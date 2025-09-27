"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send, Building2, Brain, Users, Target } from "lucide-react";
import { useState } from "react";


export function HeroSection() {
  const [inputValue, setInputValue] = useState("");

  const serviceSuggestions = [
    { icon: Building2, label: "Marketing Technology Stack" },
    { icon: Brain, label: "Data Analytics & Insights" },
    { icon: Users, label: "Customer Experience Design" },
    { icon: Target, label: "Growth Marketing Strategy" }
  ];

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900/50 to-black"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(99,181,131,0.08),transparent_70%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(99,181,131,0.06),transparent_70%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(99,181,131,0.04),transparent_80%)]"></div>
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]"></div>

      {/* Floating geometric elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-[#63b583]/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-32 right-16 w-24 h-24 bg-[#63b583]/8 rounded-full blur-lg animate-pulse animation-delay-2000"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-[#63b583]/6 rounded-full blur-md animate-pulse animation-delay-4000"></div>

      {/* Main Hero Content */}
      <div className="flex-1 flex items-center justify-center relative z-10">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 py-16 text-center">
          <div className="max-w-6xl mx-auto">
            {/* Main Heading */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
              className="mb-6"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight mb-6">
                <span className="block bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
                  Marketing Technology
                </span>
                <span className="block bg-gradient-to-r from-[#63b583] via-[#4a9666] to-[#63b583] bg-clip-text text-transparent">
                  Done Right
                </span>
              </h1>
            </motion.div>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
              className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed font-light"
            >
              Build, implement, and optimize marketing technology stacks that drive measurable growth and exceptional customer experiences.
            </motion.p>

            {/* Interactive Input */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5, ease: "easeOut" }}
              className="max-w-2xl mx-auto mb-6"
            >
              <div className="relative bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl border border-white/20 p-4 hover:bg-white/15 transition-all duration-300">
                <div className="flex items-center gap-3">
                  <Input
                    placeholder="Tell us about your marketing challenges and goals..."
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    className="flex-1 border-0 text-lg placeholder:text-gray-500 dark:placeholder:text-gray-400 focus-visible:ring-0 bg-transparent"
                  />
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-[#63b583] to-[#4a9666] hover:from-[#4a9666] hover:to-[#63b583] text-white rounded-xl px-6 shadow-lg hover:shadow-xl hover:shadow-[#63b583]/30 transition-all duration-300 hover:-translate-y-1"
                  >
                    <Send className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            </motion.div>

            {/* Service Suggestions */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.7, ease: "easeOut" }}
              className="flex flex-wrap items-center justify-center gap-4 mb-16"
            >
              {serviceSuggestions.map((service, index) => (
                <motion.button
                  key={service.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.9 + index * 0.08, ease: "easeOut" }}
                  className="flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-sm font-medium text-gray-300 hover:bg-white/10 hover:border-[#63b583]/30 hover:text-[#63b583] transition-all duration-300 hover:shadow-lg hover:shadow-[#63b583]/10 hover:-translate-y-1"
                  onClick={() => setInputValue(`I need help with ${service.label.toLowerCase()}`)}
                >
                  <service.icon className="h-4 w-4 text-[#63b583]" />
                  {service.label}
                </motion.button>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

    </section>
  );
}
