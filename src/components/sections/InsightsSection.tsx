"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { FileText, TrendingUp, Users } from "lucide-react";

const caseStudies = [
  {
    title: "Digital Transformation Success",
    description: "How we helped a Fortune 500 company achieve 40% efficiency gains through comprehensive digital transformation.",
    icon: TrendingUp,
    category: "Case Study",
  },
  {
    title: "Platform Integration Excellence",
    description: "Seamless integration of multiple business systems resulting in unified operations and improved data flow.",
    icon: FileText,
    category: "Technical Implementation",
  },
  {
    title: "Client Management Revolution",
    description: "Advanced CRM implementation that transformed client relationships and boosted retention by 35%.",
    icon: Users,
    category: "Client Success",
  },
];

export function InsightsSection() {
  return (
    <section id="insights" className="py-16" style={{ boxShadow: 'inset 0 0 35px rgba(97, 178, 128, 0.03)', scrollMarginTop: '80px' }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8" style={{ boxShadow: '0 0 28px rgba(97, 178, 128, 0.05)' }}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-left mb-12 p-6"
          style={{ boxShadow: '0 0 25px rgba(97, 178, 128, 0.06)' }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white" style={{ textShadow: '0 2px 4px rgba(97, 178, 128, 0.08)' }}>
            Insights
          </h2>
          <p className="text-base text-white max-w-2xl" style={{ textShadow: '0 1px 2px rgba(97, 178, 128, 0.05)' }}>
            Explore our latest case studies and insights from successful digital transformation projects.
          </p>
        </motion.div>

        {/* Case Studies Grid */}
        <div className="grid md:grid-cols-3 gap-8 p-4" style={{ perspective: '1200px', boxShadow: 'inset 0 0 25px rgba(97, 178, 128, 0.02)' }}>
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2, ease: [0.25, 0.1, 0.25, 1] }}
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
                className="h-full hover:shadow-lg transition-all duration-500 ease-out border-gray-200 dark:border-gray-700"
                style={{
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08), 0 2px 8px rgba(97, 178, 128, 0.12), 0 0 20px rgba(97, 178, 128, 0.06)',
                  transform: 'translateZ(0)',
                  transformStyle: 'preserve-3d',
                  border: '1px solid rgba(97, 178, 128, 0.08)'
                }}
              >
                <CardContent className="p-6 transition-all duration-500 ease-out">
                  <div
                    className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-green-100 to-green-200 dark:from-green-800 dark:to-green-700 rounded-lg mb-4 transition-all duration-500 ease-out group-hover:shadow-lg"
                    style={{
                      transform: 'translateZ(4px)',
                      boxShadow: '0 2px 8px rgba(97, 178, 128, 0.15)'
                    }}
                  >
                    <study.icon className="w-6 h-6 text-green-600 dark:text-green-400 transition-transform duration-300 group-hover:scale-105" />
                  </div>
                  <div
                    className="text-sm font-medium text-green-600 dark:text-green-400 mb-2 transition-all duration-500 ease-out"
                    style={{ transform: 'translateZ(2px)' }}
                  >
                    {study.category}
                  </div>
                  <h3
                    className="text-xl font-semibold text-foreground mb-3 transition-all duration-500 ease-out"
                    style={{
                      transform: 'translateZ(2px)',
                      textShadow: '0 1px 2px rgba(97, 178, 128, 0.06)'
                    }}
                  >
                    {study.title}
                  </h3>
                  <p
                    className="text-muted-foreground leading-relaxed transition-all duration-500 ease-out"
                    style={{ transform: 'translateZ(1px)' }}
                  >
                    {study.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
