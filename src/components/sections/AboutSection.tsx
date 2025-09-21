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
    <section id="about" className="py-16 relative overflow-hidden" style={{ scrollMarginTop: '80px' }}>
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#63b583]/5 to-transparent"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main About Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-12">
          {/* Left Column - About Text */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent leading-tight"
              >
                About Severalx Consulting
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-lg text-gray-300 leading-relaxed max-w-lg"
              >
                Leading technology consulting firm specializing in business management solutions
                and digital transformation. We empower businesses with comprehensive platforms
                for client management, project operations, and financial processes to drive
                efficiency and growth.
              </motion.p>
            </div>

            {/* Service Highlights Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-6"
            >
              {serviceHighlights.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.8 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-4 p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 group"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#63b583] to-[#4a9666] rounded-xl flex items-center justify-center shadow-lg">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-white mb-2 text-lg group-hover:text-[#63b583] transition-colors duration-300">{service.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - Impact & Why Choose */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            {/* Our Impact */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 shadow-2xl"
            >
              <h3 className="text-2xl font-bold mb-8 text-white text-left">Our Impact</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {impactMetrics.map((metric, index) => (
                  <motion.div
                    key={metric.label}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 + 0.4 }}
                    viewport={{ once: true }}
                    className="text-center group"
                  >
                    <div className="text-3xl font-bold text-[#63b583] mb-2 group-hover:scale-110 transition-transform duration-300">
                      {metric.value}
                    </div>
                    <div className="text-sm text-gray-300 font-medium leading-tight">
                      {metric.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Why Choose Several X Consulting */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h3 className="text-2xl font-bold text-white mb-6">Why Choose Several X Consulting?</h3>
              <div className="space-y-4">
                {whyChoosePoints.map((point, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.6 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-3 p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300 group"
                  >
                    <CheckCircle className="w-5 h-5 text-[#63b583] flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-300" />
                    <span className="text-gray-300 leading-relaxed group-hover:text-white transition-colors duration-300">{point}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Strategy Cards */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {strategyCards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <Card className="h-full bg-white/5 backdrop-blur-sm border border-white/10 hover:border-[#63b583]/30 hover:bg-white/10 transition-all duration-500 hover:shadow-xl hover:shadow-[#63b583]/10 hover:-translate-y-1">
                <CardContent className="p-6">
                  <h4 className="text-xl font-semibold text-white mb-4 group-hover:text-[#63b583] transition-colors duration-300">
                    {card.title}
                  </h4>
                  <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                    {card.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
