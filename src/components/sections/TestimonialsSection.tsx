"use client";

import { motion } from "framer-motion";


export function TestimonialsSection() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Insights
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            No publications yet. Check back soon
          </p>
        </motion.div>
      </div>
    </section>
  );
}
