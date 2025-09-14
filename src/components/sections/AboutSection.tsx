"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import {
  CheckCircle,
  Users,
  DollarSign,
  TrendingUp,
  Clock,
  Target,
  Zap
} from "lucide-react";

const impactMetrics = [
  {
    value: "15+",
    label: "Years Experience",
    icon: Clock,
  },
  {
    value: "500+",
    label: "Happy Clients",
    icon: Users,
  },
  {
    value: "$100M+",
    label: "Digital Solutions Deployed",
    icon: DollarSign,
  },
  {
    value: "99%",
    label: "Client Satisfaction",
    icon: TrendingUp,
  },
];

const serviceHighlights = [
  {
    icon: CheckCircle,
    title: "Digital Transformation",
    description: "Transform your business operations with cutting-edge technology solutions.",
  },
  {
    icon: Target,
    title: "Integrated Platforms",
    description: "Unified business management platforms for seamless operations.",
  },
  {
    icon: Users,
    title: "Client Management",
    description: "Advanced CRM and client relationship management systems.",
  },
  {
    icon: Zap,
    title: "Process Automation",
    description: "Automate workflows and eliminate manual inefficiencies.",
  },
];

const whyChoosePoints = [
  "Comprehensive technology consulting approach",
  "Digital transformation and process optimization",
  "Ongoing support and continuous platform updates",
  "Transparent pricing with measurable ROI",
];

const strategyCards = [
  {
    title: "Digital Strategy",
    description: "Custom digital transformation roadmaps tailored to your business needs.",
  },
  {
    title: "Platform Integration",
    description: "Seamlessly integrate our solutions with your existing tech stack.",
  },
  {
    title: "Process Optimization",
    description: "Streamline operations through intelligent automation and workflow design.",
  },
  {
    title: "Technology Roadmap",
    description: "Future-proof your business with scalable technology solutions.",
  },
];

export function AboutSection() {
  return (
    <section id="about" className="pt-2 pb-16 bg-gradient-to-b from-white to-white dark:from-black dark:to-gray-900" style={{ boxShadow: 'inset 0 0 45px rgba(97, 178, 128, 0.03)', scrollMarginTop: '80px' }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8" style={{ boxShadow: '0 0 32px rgba(97, 178, 128, 0.05)' }}>
        {/* Main About Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-4 p-4" style={{ boxShadow: 'inset 0 0 30px rgba(97, 178, 128, 0.02)' }}>
          {/* Left Column - About Text */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            style={{ boxShadow: '0 0 28px rgba(97, 178, 128, 0.06)' }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-foreground text-left whitespace-nowrap" style={{ textShadow: '0 2px 4px rgba(97, 178, 128, 0.08)' }}>
              About Severalx Consulting
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed" style={{ textShadow: '0 1px 2px rgba(97, 178, 128, 0.05)' }}>
              Leading technology consulting firm specializing in business management solutions
              and digital transformation. We empower businesses with comprehensive platforms
              for client management, project operations, and financial processes to drive
              efficiency and growth.
            </p>

            {/* Service Highlights Grid */}
            <div className="grid md:grid-cols-2 gap-6 mb-8" style={{ boxShadow: 'inset 0 0 25px rgba(97, 178, 128, 0.03)' }}>
              {serviceHighlights.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-3 p-3"
                  style={{ boxShadow: '0 0 20px rgba(97, 178, 128, 0.05)' }}
                >
                  <div className="flex-shrink-0 w-8 h-8 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center" style={{ boxShadow: '0 2px 8px rgba(97, 178, 128, 0.15)' }}>
                    <service.icon className="w-4 h-4 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1" style={{ textShadow: '0 1px 2px rgba(97, 178, 128, 0.06)' }}>{service.title}</h3>
                    <p className="text-sm text-muted-foreground">{service.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Impact & Why Choose */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            style={{ boxShadow: '0 0 28px rgba(97, 178, 128, 0.06)' }}
          >
            {/* Our Impact */}
            <div className="mb-8 mt-22">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-2"
                style={{
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.12), 0 4px 16px rgba(97, 178, 128, 0.1), 0 0 25px rgba(97, 178, 128, 0.06)',
                  border: '1px solid rgba(97, 178, 128, 0.08)'
                }}
              >
                <h3 className="text-xl font-bold mb-6 text-foreground text-center" style={{ textShadow: '0 1px 3px rgba(97, 178, 128, 0.08)' }}>Our Impact</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4" style={{ boxShadow: 'inset 0 0 20px rgba(97, 178, 128, 0.02)' }}>
                  {impactMetrics.map((metric, index) => (
                    <motion.div
                      key={metric.label}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="text-center flex flex-col items-center justify-center p-2"
                      style={{ boxShadow: '0 0 15px rgba(97, 178, 128, 0.06)' }}
                    >
                      <div className="text-2xl font-bold text-foreground mb-1" style={{ textShadow: '0 1px 2px rgba(97, 178, 128, 0.08)' }}>
                        {metric.value}
                      </div>
                      <div className="text-sm text-muted-foreground font-medium leading-tight">
                        {metric.label}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Why Choose Several X Consulting */}
            <div style={{ boxShadow: '0 0 22px rgba(97, 178, 128, 0.05)' }}>
              <h3 className="text-2xl font-bold mb-4 text-foreground" style={{ textShadow: '0 1px 3px rgba(97, 178, 128, 0.08)' }}>Why Choose Several X Consulting?</h3>
              <div className="space-y-3">
                {whyChoosePoints.map((point, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-2 p-2"
                    style={{ boxShadow: '0 0 12px rgba(97, 178, 128, 0.04)' }}
                  >
                    <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" style={{ filter: 'drop-shadow(0 0 6px rgba(97, 178, 128, 0.2))' }} />
                    <span className="text-sm text-muted-foreground">{point}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Strategy Cards */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          style={{ boxShadow: '0 0 30px rgba(97, 178, 128, 0.05)' }}
        >
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 p-4" style={{ perspective: '1200px', boxShadow: 'inset 0 0 25px rgba(97, 178, 128, 0.02)' }}>
            {strategyCards.map((card, index) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
                viewport={{ once: true }}
                className="group"
                style={{
                  transformStyle: 'preserve-3d'
                }}
                whileHover={{
                  rotateY: 1,
                  rotateX: -1,
                  y: -4,
                  transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }
                }}
              >
                <Card
                  className="h-full bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-500 ease-out"
                  style={{
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08), 0 2px 8px rgba(97, 178, 128, 0.12), 0 0 20px rgba(97, 178, 128, 0.06)',
                    transform: 'translateZ(0)',
                    transformStyle: 'preserve-3d',
                    border: '1px solid rgba(97, 178, 128, 0.08)'
                  }}
                >
                  <CardContent className="px-2 py-0.5 transition-all duration-500 ease-out">
                    <h4
                      className="text-lg font-semibold text-foreground mb-3 transition-all duration-500 ease-out"
                      style={{
                        transform: 'translateZ(2px)',
                        textShadow: '0 1px 2px rgba(97, 178, 128, 0.06)'
                      }}
                    >
                      {card.title}
                    </h4>
                    <p
                      className="text-muted-foreground text-sm leading-relaxed transition-all duration-500 ease-out"
                      style={{ transform: 'translateZ(1px)' }}
                    >
                      {card.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
