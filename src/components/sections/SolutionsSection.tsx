"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  CarouselDots,
} from "@/components/ui/carousel";
import {
  Database,
  Users,
  ClipboardList
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
      title: "CRM Dashboard",
      description: "Comprehensive CRM dashboard with real-time analytics and insights",
      image: "/solutions/crm-dashboard.png"
    },
    {
      id: 2,
      title: "CRM Companies",
      description: "Manage and organize client companies with detailed profiles and relationship tracking",
      image: "/solutions/crm-companies.png"
    },
    {
      id: 3,
      title: "CRM Opportunities",
      description: "Discover and track new opportunities and potential deals",
      image: "/solutions/crm-opportunities.png"
    },
    {
      id: 4,
      title: "CRM Tasks",
      description: "Organize and manage tasks with advanced tracking capabilities",
      image: "/solutions/crm-tasks.png"
    }
  ],
  "finance-management": [
    {
      id: 1,
      title: "Project Management",
      description: "Coming soon - Advanced project management tools and features",
      image: "/solutions/comingsoon-projectmanagement.png"
    }
  ],
  "client-management": [
    {
      id: 1,
      title: "Knowledge Base",
      description: "Coming soon - Comprehensive knowledge management and documentation system",
      image: "/solutions/comingsoon-knowledgebase.png"
    }
  ]
};

// Management platform tabs data
const managementTabs = [
  {
    id: "project-management",
    title: "CRM",
    icon: Users,
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
    title: "Project Management",
    icon: ClipboardList,
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
    title: "Knowledge Base",
    icon: Database,
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
    <section id="products" className="py-5 lg:py-6 relative overflow-hidden" style={{ scrollMarginTop: '80px' }}>
      {/* Background Effects */}
      <div className={`absolute inset-0 ${BACKGROUND_GRADIENTS.section}`}></div>
      <div className={`absolute inset-0 ${BACKGROUND_GRADIENTS.radial.primary}`}></div>
      <div className={`absolute inset-0 ${BACKGROUND_GRADIENTS.radial.secondary}`}></div>
      <div className={`absolute inset-0 ${BACKGROUND_GRADIENTS.radial.tertiary}`}></div>
      
      {/* Seamless border blending - extended and ultra-subtle */}
      <div className="absolute top-0 left-0 right-0 h-28 bg-gradient-to-b from-gray-900/40 via-gray-900/10 to-transparent pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-gray-900/40 via-gray-900/10 to-transparent pointer-events-none"></div>
      
      <div className="container mx-auto px-3 sm:px-4 lg:px-6 relative z-10">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-left mb-3 sm:mb-3.5"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2">
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
          className="max-w-6xl mx-auto"
        >
          <Tabs defaultValue="project-management" className="w-full">
            <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 mb-2 h-auto md:h-11 bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl p-1.5 md:p-0 gap-1.5 md:gap-0">
              {managementTabs.map((tab) => (
                <TabsTrigger
                  key={tab.id}
                  value={tab.id}
                  className="data-[state=active]:bg-white/20 data-[state=active]:text-white text-white/70 font-medium text-sm md:text-sm h-9 rounded-lg transition-all duration-300 flex items-center justify-center md:justify-start px-2 md:px-3"
                >
                  <tab.icon className="w-4 h-4 md:w-4 md:h-4 mr-1.5 md:mr-1.5 flex-shrink-0" />
                  <span className="truncate">{tab.title}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            {managementTabs.map((tab) => (
              <TabsContent key={tab.id} value={tab.id} className="space-y-0">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="space-y-0"
                >
                  {/* Only show slideshow if images exist for this tab */}
                  {managementImages[tab.id] && managementImages[tab.id].length > 0 ? (
                    <>
                      {/* Full Screen Interface Images Slideshow */}
                      <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="relative w-full overflow-hidden rounded-xl shadow-2xl bg-white/5 backdrop-blur-sm border border-white/10"
                      >

                        <Carousel className="w-full">
                          <CarouselContent>
                            {managementImages[tab.id as keyof typeof managementImages].map((image: ManagementImage) => (
                          <CarouselItem key={image.id}>
                            <div className="flex flex-col">
                              {/* Image Container */}
                              <div className="relative w-full h-[38vh] sm:h-[43vh] md:h-[48vh] lg:h-[53vh] overflow-hidden group">
                                <Image
                                  src={image.image}
                                  alt={image.title}
                                  width={640}
                                  height={400}
                                  className="w-full h-full object-cover"
                                />

                              </div>

                              {/* Title and Description Below Image */}
                              <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                                className="p-3.5 sm:p-4 bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm border-t border-white/10"
                              >
                                <h4 className="text-xl font-bold text-white mb-2 sm:mb-2 leading-tight">
                                  {image.title}
                                </h4>
                                <p className="text-sm sm:text-base text-white/70 leading-relaxed">
                                  {image.description}
                                </p>
                              </motion.div>
                            </div>
                          </CarouselItem>
                        ))}
                      </CarouselContent>

                      {/* Enhanced Slideshow Controls */}
                      <div className="absolute bottom-11 sm:bottom-12 md:bottom-13 left-1/2 -translate-x-1/2 flex items-center space-x-2.5 md:space-x-3 bg-black/40 backdrop-blur-md rounded-full px-3.5 py-2 sm:px-4 sm:py-2 md:px-5 md:py-2.5 border border-white/10">
                        <CarouselPrevious className="bg-black/5 backdrop-blur-sm hover:bg-black/15 text-white hover:text-gray-200 border-white/10 h-8 w-8 sm:h-8 sm:w-8 md:h-9 md:w-9 shadow-sm" />
                        <CarouselDots className="space-x-2 md:space-x-2.5" />
                        <CarouselNext className="bg-black/5 backdrop-blur-sm hover:bg-black/15 text-white hover:text-gray-200 border-white/10 h-8 w-8 sm:h-8 sm:w-8 md:h-9 md:w-9 shadow-sm" />
                      </div>
                    </Carousel>
                  </motion.div>
                    </>
                  ) : null}
                </motion.div>
              </TabsContent>
            ))}
          </Tabs>
        </motion.div>
      </div>
    </section>
  );
}