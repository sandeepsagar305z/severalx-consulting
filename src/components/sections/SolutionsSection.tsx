"use client";

import Image from "next/image";
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
import { BACKGROUND_GRADIENTS } from "@/lib/constants";

/**
 * Interface for management platform images
 */
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
      title: "Project Management Dashboard",
      description: "Comprehensive project management dashboard with real-time analytics and insights",
      image: "/solutions/project-management-dashboard.png"
    },
    {
      id: 2,
      title: "Project Opportunities",
      description: "Discover and track new project opportunities and potential deals",
      image: "/solutions/project-management-opportunities.png"
    },
    {
      id: 3,
      title: "Project Tasks",
      description: "Organize and manage project tasks with advanced tracking capabilities",
      image: "/solutions/project-management-tasks.png"
    },
    {
      id: 4,
      title: "Project Notes",
      description: "Collaborative note-taking and documentation for project management",
      image: "/solutions/project-management-notes.png"
    }
  ],
  "finance-management": [
    {
      id: 1,
      title: "Finance Management Dashboard",
      description: "Comprehensive financial dashboard with real-time analytics and insights",
      image: "/solutions/Finance-management-dashboard.png"
    },
    {
      id: 2,
      title: "Finance Management Overview",
      description: "Complete financial overview with revenue, expenses, and performance tracking",
      image: "/solutions/Finance-management-overview.png"
    }
  ],
  "client-management": [
    {
      id: 1,
      title: "Client Management Dashboard",
      description: "Comprehensive client relationship management dashboard with analytics and insights",
      image: "/solutions/client-managent-dashboard.png"
    },
    {
      id: 2,
      title: "Client Management Companies",
      description: "Manage and organize client companies with detailed profiles and relationship tracking",
      image: "/solutions/client-management-companies.png"
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


export function SolutionsSection() {
  return (
    <section id="products" className="py-16 relative overflow-hidden" style={{ scrollMarginTop: '80px' }}>
      {/* Background Effects */}
      <div className={`absolute inset-0 ${BACKGROUND_GRADIENTS.section}`}></div>
      <div className={`absolute inset-0 ${BACKGROUND_GRADIENTS.radial.primary}`}></div>
      <div className={`absolute inset-0 ${BACKGROUND_GRADIENTS.radial.secondary}`}></div>
      <div className={`absolute inset-0 ${BACKGROUND_GRADIENTS.radial.tertiary}`}></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-left mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Solutions
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

                    <Carousel className="w-full h-full">
                      <CarouselContent className="h-full">
                        {managementImages[tab.id as keyof typeof managementImages].map((image: ManagementImage, index: number) => (
                          <CarouselItem key={image.id} className="h-full">
                            <div className="relative w-full h-full group">
                              <Image
                                src={image.image}
                                alt={image.title}
                                width={800}
                                height={500}
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
                                  <h4 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4 leading-tight drop-shadow-lg">
                                    {image.title}
                                  </h4>
                                  <p className="text-xl md:text-2xl text-black/90 leading-relaxed mb-6 drop-shadow-md">
                                    {image.description}
                                  </p>

                                  {/* Action Buttons */}
                                  {tab.id !== "finance-management" && (
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
                                  )}

                                  {/* Spacer for consistent alignment when no buttons */}
                                  {tab.id === "finance-management" && (
                                    <div className="h-20"></div>
                                  )}
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