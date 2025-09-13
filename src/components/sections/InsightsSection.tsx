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
    <section id="insights" className="py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-left mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Insights
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Explore our latest case studies and insights from successful digital transformation projects.
          </p>
        </motion.div>

        {/* Case Studies Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300 border-gray-200 dark:border-gray-800">
                <CardContent className="p-6">
                  <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 rounded-lg mb-4">
                    <study.icon className="w-6 h-6 text-gray-600 dark:text-gray-400" />
                  </div>
                  <div className="text-sm font-medium text-blue-600 dark:text-blue-400 mb-2">
                    {study.category}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {study.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
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
