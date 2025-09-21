"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Database,
  DollarSign,
  Users,
  Play,
  Settings
} from "lucide-react";

// Interface for management images
interface ManagementImage {
  id: number;
  title: string;
  description: string;
  image: string;
}

// Slideshow images for each management area
const managementImages: Record<string, ManagementImage[]> = {
  "project-management": [
    {
      id: 1,
      title: "Project Dashboard Overview",
      description: "Comprehensive project management dashboard with real-time analytics",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=500&fit=crop&crop=top"
    },
    {
      id: 2,
      title: "Task Management Interface",
      description: "Intuitive task assignment and progress tracking system",
      image: "https://images.unsplash.com/photo-1553028826-f4804a6dba3b?w=800&h=500&fit=crop&crop=center"
    },
    {
      id: 3,
      title: "Team Collaboration Tools",
      description: "Advanced collaboration features for seamless teamwork",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=500&fit=crop&crop=center"
    },
    {
      id: 4,
      title: "Timeline & Milestones",
      description: "Visual project timelines with milestone tracking",
      image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&h=500&fit=crop&crop=center"
    }
  ],
  "finance-management": [
    {
      id: 1,
      title: "Financial Dashboard",
      description: "Complete financial overview with revenue and expense tracking",
      image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=800&h=500&fit=crop&crop=center"
    },
    {
      id: 2,
      title: "Invoice Management",
      description: "Professional invoice generation and payment tracking",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=500&fit=crop&crop=center"
    },
    {
      id: 3,
      title: "Budget Planning",
      description: "Advanced budgeting tools with forecasting capabilities",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop&crop=center"
    },
    {
      id: 4,
      title: "Financial Reports",
      description: "Detailed financial reporting and analytics dashboard",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop&crop=center"
    }
  ],
  "client-management": [
    {
      id: 1,
      title: "CRM Dashboard",
      description: "Comprehensive client relationship management interface",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop&crop=top"
    },
    {
      id: 2,
      title: "Lead Management",
      description: "Advanced lead tracking and conversion pipeline",
      image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?w=800&h=500&fit=crop&crop=center"
    },
    {
      id: 3,
      title: "Client Communication",
      description: "Integrated communication tools and history tracking",
      image: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=800&h=500&fit=crop&crop=center"
    },
    {
      id: 4,
      title: "Sales Analytics",
      description: "Detailed sales performance and client analytics",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop&crop=top"
    }
  ]
};

// Management platform tabs data
const managementTabs = [
  {
    id: "project-management",
    title: "Project Management",
    icon: Database,
    description: "Streamline project workflows with powerful task management and team collaboration tools",
    color: "from-blue-500 to-blue-600",
    features: [
      "Task Management & Assignment",
      "Project Timeline & Milestones", 
      "Team Collaboration Tools",
      "Resource Allocation",
      "Progress Tracking",
      "File Sharing & Documentation"
    ]
  },
  {
    id: "finance-management", 
    title: "Finance Management",
    icon: DollarSign,
    description: "Complete financial oversight with budgeting, invoicing, and expense tracking capabilities",
    color: "from-emerald-500 to-emerald-600",
    features: [
      "Budget Planning & Control",
      "Invoice Generation & Tracking",
      "Expense Management",
      "Financial Reporting",
      "Revenue Analytics",
      "Payment Processing"
    ]
  },
  {
    id: "client-management",
    title: "Client Management", 
    icon: Users,
    description: "Comprehensive CRM solution for managing client relationships and sales processes",
    color: "from-purple-500 to-purple-600",
    features: [
      "Contact & Lead Management",
      "Sales Pipeline Tracking",
      "Communication History",
      "Deal Management",
      "Client Portal Access",
      "Performance Analytics"
    ]
  }
];


export function ProductsSection() {
  return (
    <section id="products" className="py-16 relative overflow-hidden" style={{ scrollMarginTop: '80px' }}>
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(99,181,131,0.1),transparent_70%)]"></div>
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-left mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Products
          </h2>
          <p className="text-lg text-white/80 max-w-3xl">
            Comprehensive business management solutions designed to streamline your operations and drive growth
          </p>
        </motion.div>

        {/* Management Platform Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-7xl mx-auto"
        >
          <Tabs defaultValue="project-management" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8 h-16 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl">
              {managementTabs.map((tab) => (
                <TabsTrigger 
                  key={tab.id} 
                  value={tab.id}
                  className="data-[state=active]:bg-white/20 data-[state=active]:text-white text-white/70 font-medium text-base h-12 rounded-xl transition-all duration-300"
                >
                  <tab.icon className="w-5 h-5 mr-2" />
                  {tab.title}
                </TabsTrigger>
              ))}
            </TabsList>

            {managementTabs.map((tab) => (
              <TabsContent key={tab.id} value={tab.id} className="space-y-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="space-y-6"
                >

                  {/* Full Screen Interface Images Slideshow */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="relative w-full h-[80vh] overflow-hidden rounded-2xl shadow-2xl bg-black/20 backdrop-blur-sm"
                  >
                    {/* Section Title Overlay */}
                    <div className="absolute top-6 left-6 z-20">
                      <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">
                        {tab.title} Interface
                      </h3>
                      <p className="text-white/80 text-lg max-w-md">
                        Explore our comprehensive {tab.title.toLowerCase()} dashboard and tools
                      </p>
                    </div>

                    <Carousel className="w-full h-full">
                      <CarouselContent className="h-full">
                        {managementImages[tab.id as keyof typeof managementImages].map((image: ManagementImage, index: number) => (
                          <CarouselItem key={image.id} className="h-full">
                            <div className="relative w-full h-full group">
                              <img
                                src={image.image}
                                alt={image.title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                              />

                              {/* Gradient Overlay */}
                              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                              {/* Prominent Heading Overlay */}
                              <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-12">
                                <motion.div
                                  initial={{ opacity: 0, y: 30 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  transition={{ duration: 0.6, delay: 0.3 }}
                                  className="max-w-2xl"
                                >
                                  <h4 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
                                    {image.title}
                                  </h4>
                                  <p className="text-xl md:text-2xl text-white/90 leading-relaxed mb-6">
                                    {image.description}
                                  </p>

                                  {/* Action Buttons */}
                                  <div className="flex flex-col sm:flex-row gap-4">
                                    <Button
                                      size="lg"
                                      className={`bg-gradient-to-r ${tab.color} hover:opacity-90 text-white border-0 shadow-xl hover:shadow-2xl transition-all duration-300 text-lg px-8 py-3`}
                                    >
                                      <Play className="w-5 h-5 mr-3" />
                                      View Live Demo
                                    </Button>
                                    <Button
                                      variant="outline"
                                      size="lg"
                                      className="bg-white/10 backdrop-blur-md border-white/30 text-white hover:bg-white/20 hover:border-white/50 text-lg px-8 py-3"
                                    >
                                      <Settings className="w-5 h-5 mr-3" />
                                      Customize Interface
                                    </Button>
                                  </div>
                                </motion.div>
                              </div>

                              {/* Image Counter */}
                              <div className="absolute top-6 right-6 bg-black/60 backdrop-blur-md text-white px-4 py-2 rounded-full text-lg font-medium border border-white/20">
                                {index + 1} / {managementImages[tab.id as keyof typeof managementImages].length}
                              </div>

                              {/* Navigation Hints */}
                              <div className="absolute bottom-6 right-6 flex space-x-2">
                                <div className="bg-black/60 backdrop-blur-md text-white px-3 py-2 rounded-full text-sm border border-white/20">
                                  ← Previous
                                </div>
                                <div className="bg-black/60 backdrop-blur-md text-white px-3 py-2 rounded-full text-sm border border-white/20">
                                  Next →
                                </div>
                              </div>
                            </div>
                          </CarouselItem>
                        ))}
                      </CarouselContent>

                      {/* Enhanced Navigation Buttons */}
                      <CarouselPrevious className="absolute left-6 top-1/2 -translate-y-1/2 bg-black/60 backdrop-blur-md hover:bg-black/80 text-white border-white/30 h-14 w-14 shadow-xl" />
                      <CarouselNext className="absolute right-6 top-1/2 -translate-y-1/2 bg-black/60 backdrop-blur-md hover:bg-black/80 text-white border-white/30 h-14 w-14 shadow-xl" />
                    </Carousel>

                    {/* Enhanced Slideshow Indicators */}
                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-3 bg-black/40 backdrop-blur-md rounded-full px-4 py-2 border border-white/10">
                      {managementImages[tab.id as keyof typeof managementImages].map((_: ManagementImage, index: number) => (
                        <div
                          key={index}
                          className="w-3 h-3 rounded-full bg-white/50 hover:bg-white/80 transition-all duration-300 cursor-pointer hover:scale-125"
                        ></div>
                      ))}
                    </div>
                  </motion.div>
                </motion.div>
              </TabsContent>
            ))}
          </Tabs>
        </motion.div>
      </div>
    </section>
  );
}