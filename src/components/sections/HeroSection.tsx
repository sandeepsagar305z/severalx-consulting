"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send, Building2, Brain, Users, Target } from "lucide-react";
import { useState } from "react";

// Animated background components
const FloatingShape = ({ delay = 0, duration = 20, size = 60, color = "rgba(99,181,131,0.1)" }) => (
  <motion.div
    className="absolute rounded-full blur-sm"
    style={{
      width: size,
      height: size,
      background: color,
    }}
    animate={{
      x: [0, 150, -80, 0],
      y: [0, -120, 90, 0],
      scale: [1, 1.4, 0.7, 1],
      rotate: [0, 270, 540],
    }}
    transition={{
      duration: duration * 0.8,
      repeat: Infinity,
      delay: delay,
      ease: "linear",
    }}
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
  />
);

const CircuitLine = ({ delay = 0 }) => (
  <motion.div
    className="absolute h-px bg-gradient-to-r from-transparent via-green-400/40 to-transparent"
    style={{
      width: "250px",
      top: "50%",
      left: "50%",
      transformOrigin: "left center",
    }}
    animate={{
      scaleX: [0, 1.2, 0],
      opacity: [0, 1, 0],
    }}
    transition={{
      duration: 2.2,
      repeat: Infinity,
      delay: delay,
      ease: "easeInOut",
    }}
  />
);

const ParticleField = () => {
  const particles = Array.from({ length: 25 }, (_, i) => i);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {particles.map((i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-green-400/50 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [-30, -140],
            opacity: [0, 1, 0],
            scale: [0, 1.3, 0],
          }}
          transition={{
            duration: 3 + Math.random() * 3,
            repeat: Infinity,
            delay: Math.random() * 3,
            ease: "easeOut",
          }}
        />
      ))}
    </div>
  );
};

const GradientWave = ({ delay = 0 }) => (
  <motion.div
    className="absolute inset-0 opacity-25"
    style={{
      background: "radial-gradient(circle at 20% 50%, rgba(99,181,131,0.12) 0%, transparent 50%)",
    }}
    animate={{
      scale: [1, 1.4, 1],
      opacity: [0.12, 0.4, 0.12],
    }}
    transition={{
      duration: 6,
      repeat: Infinity,
      delay: delay,
      ease: "easeInOut",
    }}
  />
);

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
      {/* Enhanced Animated Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900/50 to-black"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(99,181,131,0.08),transparent_70%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(99,181,131,0.06),transparent_70%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(99,181,131,0.04),transparent_80%)]"></div>
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]"></div>

      {/* Animated Background Elements */}
      {/* Animated gradient waves */}
      <GradientWave delay={0} />
      <GradientWave delay={2} />
      <GradientWave delay={4} />

      {/* Floating geometric shapes */}
      <FloatingShape delay={0} duration={25} size={80} color="rgba(99,181,131,0.08)" />
      <FloatingShape delay={2} duration={30} size={60} color="rgba(74,150,102,0.06)" />
      <FloatingShape delay={4} duration={35} size={100} color="rgba(99,181,131,0.05)" />
      <FloatingShape delay={6} duration={28} size={70} color="rgba(74,150,102,0.07)" />

      {/* Circuit-like lines */}
      <div className="absolute top-1/4 left-1/4">
        <CircuitLine delay={0} />
      </div>
      <div className="absolute top-3/4 right-1/4">
        <CircuitLine delay={1.5} />
      </div>
      <div className="absolute top-1/2 left-3/4">
        <CircuitLine delay={3} />
      </div>

      {/* Particle field effect */}
      <ParticleField />

      {/* Original floating elements with enhanced animation */}
      <motion.div
        className="absolute top-20 left-10 w-32 h-32 bg-[#63b583]/12 rounded-full blur-xl"
        animate={{
          scale: [1, 1.4, 1],
          opacity: [0.12, 0.25, 0.12],
        }}
        transition={{
          duration: 3.2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-32 right-16 w-24 h-24 bg-[#63b583]/10 rounded-full blur-lg"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          delay: 1.5,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute top-1/2 left-1/4 w-16 h-16 bg-[#63b583]/8 rounded-full blur-md"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.08, 0.16, 0.08],
        }}
        transition={{
          duration: 4.8,
          repeat: Infinity,
          delay: 3,
          ease: "easeInOut",
        }}
      />

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
