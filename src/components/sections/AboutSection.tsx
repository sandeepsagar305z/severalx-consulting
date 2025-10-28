"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import {
  CheckCircle,
  Target,
  Users,
  Zap
} from "lucide-react";
import { BACKGROUND_GRADIENTS, COMMON_STYLES } from "@/lib/constants";

/**
 * Key impact metrics showcasing company achievements
 */
const impactMetrics = [
  {
    value: "15+",
    label: "Years Experience",
  },
  {
    value: "500+",
    label: "Happy Clients",
  },
  {
    value: "$50M+",
    label: "Assets Managed",
  },
  {
    value: "99%",
    label: "Client Satisfaction",
  },
] as const;

/**
 * Main service offerings with icons and descriptions
 */
const serviceHighlights = [
  {
    icon: CheckCircle,
    title: "Digital Transformation",
    description: "Modernize your business with cutting-edge technology solutions.",
  },
  {
    icon: Target,
    title: "Strategic Consulting",
    description: "End-to-end technology strategy and implementation guidance.",
  },
  {
    icon: Users,
    title: "Team Training",
    description: "Empower your workforce with technology skills and best practices.",
  },
  {
    icon: Zap,
    title: "Process Automation",
    description: "Streamline operations with intelligent automation solutions.",
  },
] as const;

/**
 * Reasons why clients choose Severalx Consulting
 */
const whyChoosePoints = [
  "Comprehensive business advisory approach",
  "Regulatory compliance and risk management",
  "Ongoing relationship and regular business reviews",
  "Transparent fee structure with no hidden costs",
] as const;

/**
 * Technology strategy focus areas
 */
const strategyCards = [
  {
    title: "Cloud Migration",
    description: "Seamlessly transition to cloud infrastructure for scalability and cost efficiency.",
  },
  {
    title: "Data Analytics",
    description: "Transform data into actionable insights with advanced analytics solutions.",
  },
  {
    title: "Cybersecurity",
    description: "Protect your business with comprehensive security strategies and solutions.",
  },
  {
    title: "AI Integration",
    description: "Implement artificial intelligence to enhance productivity and decision-making.",
  },
] as const;

/**
 * About section component showcasing company information and services
 */
export function AboutSection() {
  return (
    <section id="about" className={`${COMMON_STYLES.section}`} style={{ scrollMarginTop: '80px' }}>
      {/* Background Effects */}
      <div className={`absolute inset-0 ${BACKGROUND_GRADIENTS.section}`}></div>
      <div className={`absolute inset-0 ${BACKGROUND_GRADIENTS.radial.primary}`}></div>
      <div className={`absolute inset-0 ${BACKGROUND_GRADIENTS.radial.secondary}`}></div>
      <div className={`absolute inset-0 ${BACKGROUND_GRADIENTS.radial.tertiary}`}></div>

      {/* Seamless border blending - extended and ultra-subtle */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-gray-900/40 via-gray-900/10 to-transparent pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-950/40 via-gray-950/10 to-transparent pointer-events-none"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 xl:gap-10 items-start">
          
          {/* Left Column */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight">
                About Severalx Consulting
              </h2>
              <p className="mt-3 text-base sm:text-lg text-white/80 max-w-xl">
                Technology consulting experts specializing in digital transformation, business process optimization, and innovative technology solutions. We help companies leverage cutting-edge technologies to drive growth and competitive advantage.
              </p>
            </motion.div>

            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                transition={{ staggerChildren: 0.15, delayChildren: 0.2 }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 sm:gap-x-6 gap-y-5 sm:gap-y-6"
            >
                {serviceHighlights.map((service) => (
                    <motion.div
                        key={service.title}
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: { opacity: 1, y: 0 }
                        }}
                        className="flex items-start space-x-4"
                    >
                        <div className="flex-shrink-0 text-gray-300 mt-1">
                             <service.icon className="w-6 h-6" />
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-white">{service.title}</h3>
                            <p className="text-sm sm:text-base text-white/70 mt-1">{service.description}</p>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
              viewport={{ once: true, margin: "-50px" }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-5 shadow-sm border border-white/20"
            >
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Our Impact</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
                {impactMetrics.map((metric) => (
                  <div key={metric.label} className="text-center sm:text-left">
                    <p className="text-2xl lg:text-3xl font-bold text-white">{metric.value}</p>
                    <p className="text-xs sm:text-sm text-white/70 mt-1">{metric.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
              viewport={{ once: true, margin: "-50px" }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-5 shadow-sm border border-white/20"
            >
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">Why Choose Severalx Consulting?</h3>
              <ul className="space-y-3">
                {whyChoosePoints.map((point, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-sm sm:text-base text-white/70">{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Bottom Strategy Cards */}
        <motion.div
             initial="hidden"
             whileInView="visible"
             viewport={{ once: true, margin: "-100px" }}
             transition={{ staggerChildren: 0.1, delayChildren: 0.2 }}
             className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mt-8 sm:mt-10"
        >
          {strategyCards.map((card) => (
             <motion.div
                key={card.title}
                variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: { opacity: 1, y: 0 }
                }}
             >
               <Card className="bg-white/10 backdrop-blur-sm rounded-xl p-5 h-full shadow-sm border border-white/20 hover:bg-white/15 hover:shadow-lg hover:-translate-y-1.5 transition-all duration-300 ease-in-out">
                   <CardContent className="p-0">
                       <h4 className="text-xl font-bold text-white mb-2">{card.title}</h4>
                       <p className="text-sm sm:text-base text-white/70">{card.description}</p>
                   </CardContent>
               </Card>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
