"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, Briefcase, GraduationCap, ArrowRight } from "lucide-react";
import { COMMON_STYLES, BACKGROUND_GRADIENTS } from "@/lib/constants";

/**
 * Resource offerings with icons and descriptions
 */
const resources = [
  {
    title: "Software Assurance & Support",
    description: "24/7 technical support, security updates, and system maintenance to keep your software running smoothly and securely.",
    icon: Shield,
    color: "from-black to-green-700",
    buttonText: "Get Support"
  },
  {
    title: "Professional Resources",
    description: "Expert consulting, implementation, and customization services to maximize your technology investments.",
    icon: Briefcase,
    color: "from-green-700 to-black",
    buttonText: "Explore Resources"
  },
  {
    title: "Training",
    description: "Comprehensive training programs to empower your team with the skills needed to effectively use our solutions.",
    icon: GraduationCap,
    color: "from-black to-green-600",
    buttonText: "Start Training"
  }
] as const;

/**
 * Resources section component showcasing support services and training
 */
export function ResourcesSection() {
  return (
    <section id="resources" className={`${COMMON_STYLES.section}`} style={{ scrollMarginTop: '80px' }}>
      {/* Background Effects */}
      <div className={`absolute inset-0 ${BACKGROUND_GRADIENTS.section}`}></div>
      <div className={`absolute inset-0 ${BACKGROUND_GRADIENTS.radial.primary}`}></div>
      <div className={`absolute inset-0 ${BACKGROUND_GRADIENTS.radial.secondary}`}></div>
      <div className={`absolute inset-0 ${BACKGROUND_GRADIENTS.radial.tertiary}`}></div>

      {/* Professional border blending */}
      <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-gray-800/15 via-transparent to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-gray-800/15 via-transparent to-transparent"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-left mb-8"
          viewport={{ once: true }}
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent leading-tight"
          >
            Resources
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-lg text-gray-300 max-w-4xl leading-relaxed"
          >
            Comprehensive solutions to support your business growth and ensure success with our products.
          </motion.p>
        </motion.div>

        {/* Resources Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          viewport={{ once: true }}
        >
          {resources.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="group"
            >
              <Card className="h-full bg-white/5 backdrop-blur-sm border border-white/10 hover:border-[#63b583]/30 hover:bg-white/10 transition-all duration-500 hover:shadow-2xl hover:shadow-[#63b583]/10 hover:-translate-y-2 relative overflow-hidden flex flex-col">
                {/* Subtle gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#63b583]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <CardHeader className="text-center pb-6 relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#63b583] to-[#4a9666] rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl group-hover:shadow-2xl group-hover:shadow-[#63b583]/30 transition-all duration-500 group-hover:scale-110">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl mb-4 text-white group-hover:text-[#63b583] transition-colors duration-300">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-gray-400 text-base leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0 pb-6 mt-auto relative z-10">
                  <Button className="w-full bg-gradient-to-r from-[#63b583] to-[#4a9666] hover:from-[#4a9666] hover:to-[#63b583] text-white border-0 shadow-lg hover:shadow-xl hover:shadow-[#63b583]/30 transition-all duration-500 group-hover:-translate-y-1 group/button">
                    {service.buttonText}
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover/button:translate-x-1" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
