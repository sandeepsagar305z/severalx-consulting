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
        features: ["Contact Management", "Communication History", "Lead Tracking", "Client Profiles"],
        color: "from-gray-600 to-gray-800"
      },
      {
        title: "Pipeline",
        description: "Visual sales pipeline management to track opportunities and close deals faster.",
        icon: GitBranch,
        features: ["Deal Tracking", "Stage Management", "Probability Scoring", "Sales Forecasting"],
        color: "from-gray-700 to-gray-900"
      },
      {
        title: "Estimates",
        description: "Create professional estimates and quotes with customizable templates.",
        icon: BarChart3,
        features: ["Quote Generation", "Template Library", "Cost Calculation", "Approval Workflows"],
        color: "from-gray-500 to-gray-700"
      },
      {
        title: "Proposals",
        description: "Design winning proposals with interactive content and electronic signatures.",
        icon: FileText,
        features: ["Interactive Proposals", "E-Signatures", "Template Builder", "Proposal Analytics"],
        color: "from-gray-800 to-gray-900"
      },
      {
        title: "Agreements",
        description: "Streamline contract management with automated workflows and digital signatures.",
        icon: FileCheck,
        features: ["Contract Templates", "Digital Signatures", "Automated Workflows", "Compliance Tracking"],
        color: "from-gray-600 to-gray-800"
      },
      {
        title: "Client Portal",
        description: "Provide clients with secure access to project updates and documents.",
        icon: FolderOpen,
        features: ["Secure Access", "Document Sharing", "Project Updates", "Communication Center"],
        color: "from-gray-700 to-gray-900"
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
        color: "from-gray-600 to-gray-800"
      },
      {
        title: "Task Management",
        description: "Organize and prioritize tasks with advanced filtering and assignment capabilities.",
        icon: CheckCircle,
        features: ["Task Assignment", "Priority Management", "Status Tracking", "Dependency Management"],
        color: "from-gray-700 to-gray-900"
      },
      {
        title: "Time Tracking",
        description: "Accurate time tracking with automated timers and detailed reporting.",
        icon: Clock,
        features: ["Automated Timers", "Manual Entry", "Billable Hours", "Time Reports"],
        color: "from-gray-500 to-gray-700"
      },
      {
        title: "Timesheets",
        description: "Comprehensive timesheet management for teams and individuals.",
        icon: Calendar,
        features: ["Weekly/Monthly Views", "Approval Workflows", "Team Timesheets", "Export Options"],
        color: "from-gray-800 to-gray-900"
      },
      {
        title: "Resource Planning",
        description: "Optimize resource allocation and capacity planning across projects.",
        icon: Database,
        features: ["Resource Allocation", "Capacity Planning", "Workload Balancing", "Skill Matching"],
        color: "from-gray-600 to-gray-800"
      },
      {
        title: "Reporting",
        description: "Advanced analytics and reporting for project performance insights.",
        icon: LineChart,
        features: ["Performance Analytics", "Custom Reports", "Real-time Dashboards", "Export Options"],
        color: "from-gray-500 to-gray-700"
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
        color: "from-gray-600 to-gray-800"
      },
      {
        title: "Payments",
        description: "Secure payment processing with multiple payment gateway integrations.",
        icon: CreditCard,
        features: ["Online Payments", "Payment Gateways", "Recurring Billing", "Payment Analytics"],
        color: "from-gray-700 to-gray-900"
      },
      {
        title: "Expenses",
        description: "Track and manage business expenses with receipt scanning and categorization.",
        icon: DollarSign,
        features: ["Expense Tracking", "Receipt Scanning", "Category Management", "Reimbursements"],
        color: "from-gray-500 to-gray-700"
      },
      {
        title: "Bookkeeping",
        description: "Automated bookkeeping with bank integration and financial reconciliation.",
        icon: FileCheck,
        features: ["Bank Integration", "Automated Reconciliation", "Journal Entries", "Audit Trails"],
        color: "from-gray-800 to-gray-900"
      },
      {
        title: "Rate Cards",
        description: "Manage pricing structures and rate cards for different services and clients.",
        icon: TrendingUp,
        features: ["Pricing Tiers", "Client-specific Rates", "Service Catalogs", "Rate History"],
        color: "from-gray-600 to-gray-800"
      },
      {
        title: "Budget Tracking",
        description: "Monitor budgets and financial performance with real-time tracking.",
        icon: BarChart3,
        features: ["Budget Planning", "Variance Analysis", "Cost Tracking", "Financial Forecasting"],
        color: "from-gray-500 to-gray-700"
      }
    ]
  }
};


export function ProductsSection() {
  return (
    <section id="products" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Comprehensive Business
            <span className="block bg-gradient-to-r from-black to-gray-800 bg-clip-text text-transparent">
              Management Products
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Streamline your business operations with our integrated suite of management tools
            designed to enhance productivity and drive growth.
          </p>
        </motion.div>

        {/* Products Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <Tabs defaultValue="client-management" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8 h-12">
              <TabsTrigger value="client-management" className="text-base">Client Management</TabsTrigger>
              <TabsTrigger value="project-management" className="text-base">Project Management</TabsTrigger>
              <TabsTrigger value="finance-management" className="text-base">Finance Management</TabsTrigger>
            </TabsList>

            {Object.entries(productCategories).map(([key, category]) => (
              <TabsContent key={key} value={key} className="space-y-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">{category.title}</h3>
                  <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    {category.description}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {category.products.map((product, index) => (
                    <motion.div
                      key={product.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                    >
                      <Card className="h-full hover:shadow-lg transition-all duration-300 border-0 bg-background/50 backdrop-blur-sm">
                        <CardHeader>
                          <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${product.color} flex items-center justify-center mb-4`}>
                            <product.icon className="w-6 h-6 text-white" />
                          </div>
                          <CardTitle className="text-xl mb-2">{product.title}</CardTitle>
                          <CardDescription className="text-base">
                            {product.description}
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <ul className="space-y-2 mb-6">
                            {product.features.map((feature) => (
                              <li key={feature} className="flex items-center text-sm text-muted-foreground">
                                <div className="w-1.5 h-1.5 bg-gray-600 rounded-full mr-3" />
                                {feature}
                              </li>
                            ))}
                          </ul>
                          <Button variant="ghost" className="w-full justify-between group">
                            Learn More
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
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