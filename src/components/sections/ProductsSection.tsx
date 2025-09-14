"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Users,
  GitBranch,
  BarChart3,
  FileText,
  Clock,
  Calendar,
  Database,
  DollarSign,
  CreditCard,
  TrendingUp,
  FileCheck,
  Receipt,
  ArrowRight,
  FolderOpen,
  CheckCircle,
  LineChart
} from "lucide-react";

const productCategories = {
  "client-management": {
    title: "Client Management",
    description: "Comprehensive tools to manage your client relationships and communications",
    products: [
      {
        title: "CRM",
        description: "Centralized customer relationship management with contact tracking and communication history.",
        icon: Users,
        features: ["Contact Management", "Communication History", "Client Profiles"],
        color: "from-black to-green-700"
      },
      {
        title: "Pipeline",
        description: "Visual sales pipeline management to track opportunities and close deals faster.",
        icon: GitBranch,
        features: ["Deal Tracking", "Stage Management", "Probability Scoring", "Sales Forecasting"],
        color: "from-green-700 to-black"
      },
      {
        title: "Estimates",
        description: "Create professional estimates and quotes with customizable templates.",
        icon: BarChart3,
        features: ["Quote Generation", "Template Library", "Cost Calculation", "Approval Workflows"],
        color: "from-black to-green-600"
      },
      {
        title: "Proposals",
        description: "Design winning proposals with interactive content and electronic signatures.",
        icon: FileText,
        features: ["Interactive Proposals", "E-Signatures", "Template Builder", "Proposal Analytics"],
        color: "from-green-600 to-black"
      },
      {
        title: "Agreements",
        description: "Streamline contract management with automated workflows and digital signatures.",
        icon: FileCheck,
        features: ["Contract Templates", "Digital Signatures", "Automated Workflows"],
        color: "from-black to-green-700"
      },
      {
        title: "Client Portal",
        description: "Provide clients with secure access to project updates and documents.",
        icon: FolderOpen,
        features: ["Secure Access", "Document Sharing", "Project Updates", "Communication Center"],
        color: "from-green-700 to-black"
      }
    ]
  },
  "project-management": {
    title: "Project Management",
    description: "End-to-end project management tools for planning, tracking, and delivery",
    products: [
      {
        title: "Projects",
        description: "Comprehensive project management with task tracking and milestone monitoring.",
        icon: FolderOpen,
        features: ["Project Planning", "Milestone Tracking", "Team Collaboration", "Progress Monitoring"],
        color: "from-black to-green-700"
      },
      {
        title: "Task Management",
        description: "Organize and prioritize tasks with advanced filtering and assignment capabilities.",
        icon: CheckCircle,
        features: ["Task Assignment", "Priority Management", "Dependency Management"],
        color: "from-green-700 to-black"
      },
      {
        title: "Time Tracking",
        description: "Accurate time tracking with automated timers and detailed reporting.",
        icon: Clock,
        features: ["Automated Timers", "Manual Entry", "Billable Hours", "Time Reports"],
        color: "from-black to-green-600"
      },
      {
        title: "Timesheets",
        description: "Comprehensive timesheet management for teams and individuals.",
        icon: Calendar,
        features: ["Weekly/Monthly Views", "Approval Workflows", "Team Timesheets", "Export Options"],
        color: "from-green-600 to-black"
      },
      {
        title: "Resource Planning",
        description: "Optimize resource allocation and capacity planning across projects.",
        icon: Database,
        features: ["Resource Allocation", "Capacity Planning", "Workload Balancing", "Skill Matching"],
        color: "from-black to-green-700"
      },
      {
        title: "Reporting",
        description: "Advanced analytics and reporting for project performance insights.",
        icon: LineChart,
        features: ["Performance Analytics", "Custom Reports", "Real-time Dashboards", "Export Options"],
        color: "from-black to-green-600"
      }
    ]
  },
  "finance-management": {
    title: "Finance Management",
    description: "Complete financial management suite for accounting and business operations",
    products: [
      {
        title: "Invoicing",
        description: "Professional invoice creation with automated billing and payment tracking.",
        icon: Receipt,
        features: ["Invoice Templates", "Automated Billing", "Payment Tracking", "Multi-currency"],
        color: "from-black to-green-700"
      },
      {
        title: "Payments",
        description: "Secure payment processing with multiple payment gateway integrations.",
        icon: CreditCard,
        features: ["Online Payments", "Payment Gateways", "Recurring Billing", "Payment Analytics"],
        color: "from-green-700 to-black"
      },
      {
        title: "Expenses",
        description: "Track and manage business expenses with receipt scanning and categorization.",
        icon: DollarSign,
        features: ["Expense Tracking", "Receipt Scanning", "Category Management", "Reimbursements"],
        color: "from-black to-green-600"
      },
      {
        title: "Bookkeeping",
        description: "Automated bookkeeping with bank integration and financial reconciliation.",
        icon: FileCheck,
        features: ["Bank Integration", "Automated Reconciliation", "Journal Entries", "Audit Trails"],
        color: "from-green-600 to-black"
      },
      {
        title: "Rate Cards",
        description: "Manage pricing structures and rate cards for different services and clients.",
        icon: TrendingUp,
        features: ["Pricing Tiers", "Client-specific Rates", "Service Catalogs", "Rate History"],
        color: "from-black to-green-700"
      },
      {
        title: "Budget Tracking",
        description: "Monitor budgets and financial performance with real-time tracking.",
        icon: BarChart3,
        features: ["Budget Planning", "Variance Analysis", "Cost Tracking", "Financial Forecasting"],
        color: "from-black to-green-600"
      }
    ]
  }
};


export function ProductsSection() {
  return (
    <section id="products" className="pt-16 pb-2 bg-muted/30" style={{ boxShadow: 'inset 0 0 40px rgba(97, 178, 128, 0.05)', scrollMarginTop: '80px' }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8" style={{ boxShadow: '0 0 30px rgba(97, 178, 128, 0.08)' }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-left mb-8 p-8"
          style={{ boxShadow: '0 0 35px rgba(97, 178, 128, 0.06)' }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Our Products
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Streamline your business operations with our integrated suite of management tools
            designed to enhance productivity and drive growth.
          </p>
        </motion.div>

        {/* Products Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8 p-6"
          style={{ boxShadow: '0 0 28px rgba(97, 178, 128, 0.07)' }}
        >
          <Tabs defaultValue="client-management" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8 h-12" style={{ boxShadow: '0 0 25px rgba(97, 178, 128, 0.1)' }}>
              <TabsTrigger value="client-management" className="text-base" style={{ boxShadow: 'inset 0 0 15px rgba(97, 178, 128, 0.05)' }}>Client Management</TabsTrigger>
              <TabsTrigger value="project-management" className="text-base" style={{ boxShadow: 'inset 0 0 15px rgba(97, 178, 128, 0.05)' }}>Project Management</TabsTrigger>
              <TabsTrigger value="finance-management" className="text-base" style={{ boxShadow: 'inset 0 0 15px rgba(97, 178, 128, 0.05)' }}>Finance Management</TabsTrigger>
            </TabsList>

            {Object.entries(productCategories).map(([key, category]) => (
              <TabsContent key={key} value={key} className="space-y-8" style={{ boxShadow: '0 0 20px rgba(97, 178, 128, 0.06)' }}>
                <div className="text-center mb-8 p-6" style={{ boxShadow: '0 0 25px rgba(97, 178, 128, 0.08)' }}>
                  <h3 className="text-2xl font-bold mb-4">{category.title}</h3>
                  <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    {category.description}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4" style={{ perspective: '1200px', boxShadow: 'inset 0 0 35px rgba(97, 178, 128, 0.04)' }}>
                  {category.products.map((product, index) => (
                    <motion.div
                      key={product.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
                      className="group"
                      style={{
                        transformStyle: 'preserve-3d'
                      }}
                      whileHover={{
                        rotateY: 2,
                        rotateX: -1,
                        y: -8,
                        transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }
                      }}
                    >
                      <Card
                        className="aspect-square h-full border-0 bg-background/50 backdrop-blur-sm gap-0 transition-all duration-500 ease-out hover:shadow-[0_25px_50px_rgba(0,0,0,0.15),0_12px_24px_rgba(97,178,128,0.2)] hover:border-[#61b280]/30"
                        style={{
                          boxShadow: '0 6px 25px rgba(0, 0, 0, 0.1), 0 3px 12px rgba(97, 178, 128, 0.15), 0 0 30px rgba(97, 178, 128, 0.08)',
                          transform: 'translateZ(0)',
                          transformStyle: 'preserve-3d',
                          border: '1px solid rgba(97, 178, 128, 0.1)'
                        }}
                      >
                        <CardHeader className="flex-shrink-0 transition-all duration-500 ease-out">
                          <div
                            className={`w-12 h-12 rounded-lg bg-gradient-to-br ${product.color} flex items-center justify-center mb-4 transition-all duration-500 ease-out group-hover:shadow-lg`}
                            style={{
                              transform: 'translateZ(8px)',
                              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
                            }}
                          >
                            <product.icon className="w-6 h-6 text-white transition-transform duration-300 group-hover:scale-105" />
                          </div>
                          <CardTitle
                            className="text-xl mb-2 transition-all duration-500 ease-out"
                            style={{ transform: 'translateZ(4px)' }}
                          >
                            {product.title}
                          </CardTitle>
                          <CardDescription
                            className="text-base transition-all duration-500 ease-out"
                            style={{ transform: 'translateZ(2px)' }}
                          >
                            {product.description}
                          </CardDescription>
                        </CardHeader>
                        <CardContent
                          className="flex flex-col flex-1 justify-between transition-all duration-500 ease-out"
                          style={{ transform: 'translateZ(1px)' }}
                        >
                          <ul className="space-y-2">
                            {product.features.map((feature) => (
                              <li key={feature} className="flex items-center text-sm text-muted-foreground transition-all duration-300">
                                <div
                                  className="w-1.5 h-1.5 bg-green-600 rounded-full mr-3 transition-all duration-300 group-hover:bg-[#61b280]"
                                  style={{ transform: 'translateZ(2px)' }}
                                />
                                {feature}
                              </li>
                            ))}
                          </ul>
                          <Button
                            style={{
                              backgroundColor: '#61b280',
                              transform: 'translateZ(6px)',
                              boxShadow: '0 2px 12px rgba(97, 178, 128, 0.25)'
                            }}
                            className="w-full justify-between mt-auto text-white hover:bg-[#61b280]/90 transition-all duration-500 ease-out group-hover:shadow-[0_8px_25px_rgba(97,178,128,0.3)] group-hover:transform group-hover:translate-y-[-1px]"
                          >
                            Learn More
                            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                          </Button>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </motion.div>


      </div>
    </section>
  );
}