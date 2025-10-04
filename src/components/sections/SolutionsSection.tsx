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
          className="text-left mb-8 sm:mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Solutions
          </h2>
          <p className="text-base sm:text-lg text-white/80 max-w-3xl">
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
            <TabsList className="grid w-full grid-cols-1 sm:grid-cols-3 mb-6 sm:mb-8 h-auto sm:h-16 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-2 sm:p-0 gap-2 sm:gap-0">
              {managementTabs.map((tab) => (
                <TabsTrigger
                  key={tab.id}
                  value={tab.id}
                  className="data-[state=active]:bg-white/20 data-[state=active]:text-white text-white/70 font-medium text-sm sm:text-base h-12 rounded-xl transition-all duration-300 flex items-center justify-center sm:justify-start"
                >
                  <tab.icon className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2" />
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
                    className="relative w-full overflow-hidden rounded-2xl shadow-2xl bg-white/5 backdrop-blur-sm border border-white/10"
                  >

                    <Carousel className="w-full">
                      <CarouselContent>
                        {managementImages[tab.id as keyof typeof managementImages].map((image: ManagementImage, index: number) => (
                          <CarouselItem key={image.id}>
                            <div className="flex flex-col">
                              {/* Image Container */}
                              <div className="relative w-full h-[50vh] sm:h-[60vh] lg:h-[70vh] overflow-hidden group">
                                <Image
                                  src={image.image}
                                  alt={image.title}
                                  width={800}
                                  height={500}
                                  className="w-full h-full object-cover"
                                />

                              </div>

                              {/* Title and Description Below Image */}
                              <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                                className="p-6 sm:p-8 bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm border-t border-white/10"
                              >
                                <h4 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3 sm:mb-4 leading-tight">
                                  {image.title}
                                </h4>
                                <p className="text-sm sm:text-base md:text-lg text-white/80 leading-relaxed">
                                  {image.description}
                                </p>
                              </motion.div>
                            </div>
                          </CarouselItem>
                        ))}
                      </CarouselContent>

                      {/* Enhanced Navigation Buttons */}
                      <CarouselPrevious className="absolute left-2 sm:left-6 top-1/3 -translate-y-1/2 bg-black/5 backdrop-blur-sm hover:bg-black/15 text-blue-400 hover:text-blue-300 border-white/10 h-10 w-10 sm:h-14 sm:w-14 shadow-sm" />
                      <CarouselNext className="absolute right-2 sm:right-6 top-1/3 -translate-y-1/2 bg-black/5 backdrop-blur-sm hover:bg-black/15 text-blue-400 hover:text-blue-300 border-white/10 h-10 w-10 sm:h-14 sm:w-14 shadow-sm" />

                      {/* Enhanced Slideshow Indicators */}
                      <div className="absolute bottom-20 sm:bottom-24 left-1/2 -translate-x-1/2 flex space-x-2 sm:space-x-3 bg-black/40 backdrop-blur-md rounded-full px-3 py-1 sm:px-4 sm:py-2 border border-white/10">
                        {managementImages[tab.id as keyof typeof managementImages].map((_: ManagementImage, index: number) => (
                          <div
                            key={index}
                            className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-white/50 hover:bg-white/80 transition-all duration-300 cursor-pointer hover:scale-125"
                          ></div>
                        ))}
                      </div>
                    </Carousel>
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