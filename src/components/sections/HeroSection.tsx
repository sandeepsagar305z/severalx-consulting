"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";


export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-black">

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20" style={{ boxShadow: '0 0 40px rgba(97, 178, 128, 0.05)' }}>
        <div className="max-w-4xl" style={{ boxShadow: '0 0 30px rgba(97, 178, 128, 0.08)' }}>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-tight text-white"
            style={{ textShadow: '0 2px 4px rgba(97, 178, 128, 0.1)' }}
          >
            <span className="block">Transform Your Business</span>
            <span className="block bg-gradient-to-r from-white via-gray-200 to-green-400 bg-clip-text text-transparent">
              with Technology Excellence
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl leading-relaxed"
            style={{ textShadow: '0 1px 2px rgba(97, 178, 128, 0.05)' }}
          >
            Empower your organization with cutting-edge technology solutions, expert consulting,
            and scalable platforms that drive digital transformation and accelerate growth.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-start mb-12"
            style={{ boxShadow: '0 0 20px rgba(97, 178, 128, 0.06)' }}
          >
            <Button
              size="lg"
              className="px-8 py-4 text-lg font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-500 ease-out group"
              style={{
                backgroundColor: '#61b280',
                boxShadow: '0 0 20px rgba(97, 178, 128, 0.6), 0 0 40px rgba(97, 178, 128, 0.4), 0 4px 20px rgba(97, 178, 128, 0.2)',
                border: '1px solid rgba(97, 178, 128, 0.3)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 0 30px rgba(97, 178, 128, 0.8), 0 0 60px rgba(97, 178, 128, 0.6), 0 6px 30px rgba(97, 178, 128, 0.3)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 0 20px rgba(97, 178, 128, 0.6), 0 0 40px rgba(97, 178, 128, 0.4), 0 4px 20px rgba(97, 178, 128, 0.2)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              Schedule a Consultation
              <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </motion.div>

        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        style={{ boxShadow: '0 0 15px rgba(97, 178, 128, 0.08)' }}
      >
        <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center" style={{ boxShadow: 'inset 0 0 10px rgba(97, 178, 128, 0.05)' }}>
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-muted-foreground/50 rounded-full mt-2"
            style={{ boxShadow: '0 0 8px rgba(97, 178, 128, 0.1)' }}
          />
        </div>
      </motion.div>
    </section>
  );
}
