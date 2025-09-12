"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  TrendingUp,
  Users,
  BarChart3,
  Lightbulb,
  ArrowRight,
  Calendar,
  Clock,
  Eye
} from "lucide-react";

const insights = [
  {
    title: "Digital Transformation Trends 2025",
    description: "Explore the latest trends shaping digital transformation strategies for consulting firms and their clients.",
    category: "Industry Trends",
    readTime: "5 min read",
    date: "Jan 15, 2025",
    views: "2.3K",
    icon: TrendingUp,
    color: "from-blue-500 to-purple-600"
  },
  {
    title: "Optimizing Client Management Workflows",
    description: "Best practices for streamlining client onboarding, communication, and relationship management processes.",
    category: "Client Management",
    readTime: "7 min read",
    date: "Jan 12, 2025",
    views: "1.8K",
    icon: Users,
    color: "from-green-500 to-teal-600"
  },
  {
    title: "Data-Driven Decision Making in Consulting",
    description: "How analytics and business intelligence tools are revolutionizing strategic consulting approaches.",
    category: "Analytics",
    readTime: "6 min read",
    date: "Jan 10, 2025",
    views: "3.1K",
    icon: BarChart3,
    color: "from-orange-500 to-red-600"
  },
  {
    title: "The Future of Remote Team Collaboration",
    description: "Emerging technologies and methodologies for effective distributed team management and productivity.",
    category: "Team Management",
    readTime: "8 min read",
    date: "Jan 8, 2025",
    views: "2.7K",
    icon: Lightbulb,
    color: "from-purple-500 to-pink-600"
  },
  {
    title: "Financial Management Automation",
    description: "Case study on implementing automated financial workflows that reduced processing time by 60%.",
    category: "Finance",
    readTime: "10 min read",
    date: "Jan 5, 2025",
    views: "4.2K",
    icon: BarChart3,
    color: "from-indigo-500 to-blue-600"
  },
  {
    title: "Building Resilient Business Operations",
    description: "Strategies for creating adaptable business processes that withstand market volatility and disruption.",
    category: "Strategy",
    readTime: "9 min read",
    date: "Jan 3, 2025",
    views: "2.9K",
    icon: TrendingUp,
    color: "from-emerald-500 to-green-600"
  }
];

const categories = ["All", "Industry Trends", "Client Management", "Analytics", "Team Management", "Finance", "Strategy"];

export function InsightsSection() {
  return (
    <section id="insights" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Industry Insights &
            <span className="block bg-gradient-to-r from-black to-gray-800 bg-clip-text text-transparent">
              Thought Leadership
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Stay ahead of industry trends with our expert analysis, case studies, and strategic insights
            designed to help consulting firms navigate the evolving business landscape.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((category) => (
            <Badge
              key={category}
              variant={category === "All" ? "default" : "outline"}
              className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors px-4 py-2 text-sm"
            >
              {category}
            </Badge>
          ))}
        </motion.div>

        {/* Insights Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {insights.map((insight, index) => (
            <motion.div
              key={insight.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 border-0 bg-background/50 backdrop-blur-sm group cursor-pointer">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${insight.color} flex items-center justify-center`}>
                      <insight.icon className="w-6 h-6 text-white" />
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {insight.category}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors">
                    {insight.title}
                  </CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    {insight.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{insight.date}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{insight.readTime}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Eye className="w-4 h-4" />
                      <span>{insight.views}</span>
                    </div>
                  </div>
                  <Button variant="ghost" className="w-full justify-between group/btn">
                    Read More
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Stay Updated with Industry Insights
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Subscribe to our newsletter for the latest insights, case studies, and strategic guidance
              delivered directly to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-black to-gray-800 hover:from-gray-900 hover:to-black">
                Subscribe to Newsletter
              </Button>
              <Button variant="outline" size="lg">
                View All Insights
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
