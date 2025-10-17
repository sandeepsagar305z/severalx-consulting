"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send, Building2, Brain, Users, Target } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { BACKGROUND_GRADIENTS, BRAND_COLORS } from "@/lib/constants";
import { AuthModal } from "@/components/AuthModal";

/**
 * Animated floating shape component for background decoration
 */
interface FloatingShapeProps {
  delay?: number;
  duration?: number;
  size?: number;
  color?: string;
}

const FloatingShape = ({
  delay = 0,
  duration = 20,
  size = 60,
  color = "rgba(99,181,131,0.1)"
}: FloatingShapeProps) => (
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

/**
 * Animated circuit line component for tech-themed background
 */
interface CircuitLineProps {
  delay?: number;
}

const CircuitLine = ({ delay = 0 }: CircuitLineProps) => (
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

/**
 * Particle field effect for dynamic background animation
 */
const ParticleField = () => {
  // Predefined particle positions to avoid hydration mismatch
  const particlePositions = [
    { left: "8.24%", top: "11.02%" },
    { left: "74.15%", top: "90.34%" },
    { left: "52.09%", top: "68.44%" },
    { left: "19.36%", top: "90.08%" },
    { left: "37.20%", top: "99.81%" },
    { left: "39.28%", top: "77.21%" },
    { left: "47.02%", top: "62.09%" },
    { left: "52.63%", top: "57.41%" },
    { left: "59.58%", top: "20.43%" },
    { left: "26.38%", top: "43.44%" },
    { left: "84.71%", top: "71.84%" },
    { left: "73.38%", top: "29.57%" },
    { left: "86.59%", top: "61.87%" },
    { left: "38.64%", top: "90.79%" },
    { left: "47.67%", top: "40.65%" },
    { left: "87.03%", top: "10.35%" },
    { left: "14.28%", top: "82.16%" },
    { left: "58.49%", top: "27.20%" },
    { left: "29.61%", top: "92.78%" },
    { left: "33.36%", top: "53.72%" },
    { left: "69.40%", top: "53.19%" },
    { left: "54.74%", top: "24.30%" },
    { left: "53.00%", top: "33.76%" },
    { left: "7.06%", top: "35.15%" },
    { left: "75.05%", top: "28.93%" },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden">
      {particlePositions.map((position, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-green-400/50 rounded-full"
          style={{
            left: position.left,
            top: position.top,
          }}
          animate={{
            y: [-30, -140],
            opacity: [0, 1, 0],
            scale: [0, 1.3, 0],
          }}
          transition={{
            duration: 3 + (i * 0.2) % 3,
            repeat: Infinity,
            delay: (i * 0.1) % 3,
            ease: "easeOut",
          }}
        />
      ))}
    </div>
  );
};

/**
 * Animated gradient wave for background depth
 */
interface GradientWaveProps {
  delay?: number;
}

const GradientWave = ({ delay = 0 }: GradientWaveProps) => (
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

/**
 * Service suggestion options for the input field
 */
const serviceSuggestions = [
  { icon: Building2, label: "Marketing Technology Stack" },
  { icon: Brain, label: "Data Analytics & Insights" },
  { icon: Users, label: "Customer Experience Design" },
  { icon: Target, label: "Growth Marketing Strategy" },
] as const;

/**
 * Hero section component with animated background and interactive elements
 */
export function HeroSection() {
  const [inputValue, setInputValue] = useState("");
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [hasLibreChatSession, setHasLibreChatSession] = useState<boolean | null>(null);
  const checkingPromise = useRef<Promise<boolean> | null>(null);

  const chatUrl = process.env.NEXT_PUBLIC_LIBRECHAT_CHAT_URL ?? "";
  const chatApiBase = process.env.NEXT_PUBLIC_LIBRECHAT_API_BASE ?? "";

  const getBaseDomain = (hostname: string) => {
    if (hostname === "localhost" || /^\d+\.\d+\.\d+\.\d+$/.test(hostname)) {
      return hostname;
    }
    const segments = hostname.split(".");
    if (segments.length <= 2) {
      return hostname;
    }
    return segments.slice(-2).join(".");
  };

  const persistPendingQuery = (question: string) => {
    try {
      localStorage.setItem("pending_chat_query", question);
    } catch (error) {
      console.warn("Unable to store pending query in localStorage", error);
    }

    try {
      const targetHost = new URL(chatUrl).hostname;
      const currentHost = window.location.hostname;

      if (targetHost === currentHost || targetHost === "localhost") {
        document.cookie = `pending_chat_query=${encodeURIComponent(question)}; path=/; domain=${targetHost}; SameSite=Lax`;
        return;
      }

      const baseDomain = getBaseDomain(targetHost);
      if (baseDomain && currentHost.endsWith(baseDomain)) {
        document.cookie = `pending_chat_query=${encodeURIComponent(question)}; path=/; domain=.${baseDomain}; SameSite=Lax`;
      }
    } catch (error) {
      console.warn("Unable to set pending query cookie", error);
    }
  };

  const redirectToChat = (question?: string) => {
    try {
      const target = new URL(chatUrl);
      if (question && question.trim().length > 0) {
        target.searchParams.set("q", question.trim());
        persistPendingQuery(question.trim());
      }
      window.location.href = target.toString();
    } catch (error) {
      console.error("Unable to open chat window", error);
    }
  };

  const checkSession = useCallback(() => {
    if (checkingPromise.current) {
      return checkingPromise.current;
    }

    const promise = (async () => {
      try {
        const response = await fetch(`${chatApiBase.replace(/\/$/, "")}/api/user`, {
          method: "GET",
          credentials: "include",
        });

        setHasLibreChatSession(response.ok);
        return response.ok;
      } catch (error) {
        console.warn("Unable to verify LibreChat session", error);
        setHasLibreChatSession(false);
        return false;
      } finally {
        checkingPromise.current = null;
      }
    })();

    checkingPromise.current = promise;
    return promise;
  }, [chatApiBase]);

  useEffect(() => {
    checkSession();
  }, [checkSession]);

  const handleChatAccess = async () => {
    const sessionActive = hasLibreChatSession ?? (await checkSession());

    if (sessionActive) {
      redirectToChat(inputValue);
      return;
    }

    setShowAuthModal(true);
  };

  const handleAuthSuccess = (question?: string) => {
    setShowAuthModal(false);
    setHasLibreChatSession(true);
    redirectToChat(question ?? inputValue);
    setInputValue("");
  };

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Animated Background Layers */}
      <div className={`absolute inset-0 ${BACKGROUND_GRADIENTS.hero.main}`}></div>
      <div className={`absolute inset-0 ${BACKGROUND_GRADIENTS.hero.radial1}`}></div>
      <div className={`absolute inset-0 ${BACKGROUND_GRADIENTS.hero.radial2}`}></div>
      <div className={`absolute inset-0 ${BACKGROUND_GRADIENTS.hero.radial3}`}></div>
      <div className={`absolute inset-0 ${BACKGROUND_GRADIENTS.hero.radial4}`}></div>
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]"></div>

      {/* Animated Background Elements */}
      {/* Gradient waves for depth */}
      <GradientWave delay={0} />
      <GradientWave delay={2} />
      <GradientWave delay={4} />

      {/* Floating geometric shapes */}
      <FloatingShape delay={0} duration={25} size={80} color="rgba(99,181,131,0.08)" />
      <FloatingShape delay={2} duration={30} size={60} color="rgba(74,150,102,0.06)" />
      <FloatingShape delay={4} duration={35} size={100} color="rgba(99,181,131,0.05)" />
      <FloatingShape delay={6} duration={28} size={70} color="rgba(74,150,102,0.07)" />

      {/* Circuit-like lines for tech aesthetic */}
      <div className="absolute top-1/4 left-1/4">
        <CircuitLine delay={0} />
      </div>
      <div className="absolute top-3/4 right-1/4">
        <CircuitLine delay={1.5} />
      </div>
      <div className="absolute top-1/2 left-3/4">
        <CircuitLine delay={3} />
      </div>

      {/* Particle field for dynamic movement */}
      <ParticleField />

      {/* Additional floating elements */}
      <motion.div
        className={`absolute top-20 left-10 w-32 h-32 bg-[${BRAND_COLORS.primary}]/12 rounded-full blur-xl`}
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
        className={`absolute bottom-32 right-16 w-24 h-24 bg-[${BRAND_COLORS.primary}]/10 rounded-full blur-lg`}
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
        className={`absolute top-1/2 left-1/4 w-16 h-16 bg-[${BRAND_COLORS.primary}]/8 rounded-full blur-md`}
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
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 py-12 sm:py-16 text-center">
          <div className="max-w-6xl mx-auto">
            {/* Main Heading */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
              className="mb-4 sm:mb-6"
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] sm:leading-tight mb-4 sm:mb-6">
                <span className="block bg-gradient-to-r from-[#63b583] via-[#4a9666] to-[#63b583] bg-clip-text text-transparent">
                  The Platform for 10x Consultants
                </span>
              </h1>
            </motion.div>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
              className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed font-light px-2"
            >
              Technology to power your consulting business from End-to-End
            </motion.p>

            {/* Interactive Input */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5, ease: "easeOut" }}
              className="max-w-2xl mx-auto mb-6 px-4"
            >
              <div className="relative bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl border border-white/20 p-3 sm:p-4 hover:bg-white/15 transition-all duration-300">
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                  <Input
                    placeholder="Chat with our AI about your consulting business..."
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    className="flex-1 border-0 text-base sm:text-lg text-white placeholder:text-white/60 focus-visible:ring-0 bg-transparent min-h-[44px] sm:min-h-0"
                  />
                  <Button
                    size="lg"
                    onClick={handleChatAccess}
                    className={`${BRAND_COLORS.gradient.primary} text-white rounded-xl px-4 sm:px-6 shadow-lg hover:shadow-xl hover:shadow-[#63b583]/30 transition-all duration-300 hover:-translate-y-1 min-h-[44px] sm:min-h-0`}
                  >
                    <Send className="h-4 w-4 sm:h-5 sm:w-5" />
                  </Button>
                </div>
              </div>
            </motion.div>

            {/* Service Suggestions */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.7, ease: "easeOut" }}
              className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 mb-12 sm:mb-16 px-2"
            >
              {serviceSuggestions.map((service, index) => (
                <motion.button
                  key={service.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.9 + index * 0.08, ease: "easeOut" }}
                  className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-xs sm:text-sm font-medium text-gray-300 hover:bg-white/10 hover:border-[#63b583]/30 hover:text-[#63b583] transition-all duration-300 hover:shadow-lg hover:shadow-[#63b583]/10 hover:-translate-y-1 group whitespace-nowrap"
                  onClick={() => setInputValue(`I need help with ${service.label.toLowerCase()}`)}
                >
                  <service.icon className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-[#63b583]" />
                  {service.label}
                </motion.button>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Auth Modal */}
      <AuthModal
        isOpen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
        onSuccess={handleAuthSuccess}
        pendingQuestion={inputValue}
      />
    </section>
  );
}
