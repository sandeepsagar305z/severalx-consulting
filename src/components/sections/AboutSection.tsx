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
    <section id="about" className="py-24 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main About Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
          {/* Left Column - About Text */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-foreground text-left">
              About Several X Consulting
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Leading technology consulting firm specializing in business management solutions
              and digital transformation. We empower businesses with comprehensive platforms
              for client management, project operations, and financial processes to drive
              efficiency and growth.
            </p>

            {/* Service Highlights Grid */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {serviceHighlights.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-3"
                >
                  <div className="flex-shrink-0 w-8 h-8 bg-gray-100 dark:bg-gray-900/20 rounded-full flex items-center justify-center">
                    <service.icon className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{service.title}</h3>
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
          >
            {/* Our Impact */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-6 text-foreground">Our Impact</h3>
              <div className="grid grid-cols-2 gap-6">
                {impactMetrics.map((metric, index) => (
                  <motion.div
                    key={metric.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-center p-4 bg-white dark:bg-slate-800 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700"
                  >
                    <div className="flex items-center justify-center w-10 h-10 mx-auto mb-3 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-900/20 dark:to-gray-800/20">
                      <metric.icon className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                    </div>
                    <div className="text-2xl font-bold text-foreground mb-1">
                      {metric.value}
                    </div>
                    <div className="text-sm text-muted-foreground font-medium">
                      {metric.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Why Choose Several X Consulting */}
            <div>
              <h3 className="text-2xl font-bold mb-6 text-foreground">Why Choose Several X Consulting?</h3>
              <div className="space-y-4">
                {whyChoosePoints.map((point, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-3"
                  >
                    <CheckCircle className="w-5 h-5 text-gray-600 flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{point}</span>
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
        >
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {strategyCards.map((card, index) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-950/50 dark:to-gray-900/50 border-gray-100 dark:border-gray-800 hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <h4 className="text-lg font-semibold text-foreground mb-3">
                      {card.title}
                    </h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
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
