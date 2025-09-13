"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Building2 } from "lucide-react";

const partneredCompanies = [
  {
    name: "Company 1",
    description: "Leading technology solutions provider",
    color: "from-gray-600 to-gray-800"
  },
  {
    name: "Company 2",
    description: "Innovative business consulting firm",
    color: "from-gray-700 to-gray-900"
  },
  {
    name: "Company 3",
    description: "Digital transformation experts",
    color: "from-gray-500 to-gray-700"
  },
  {
    name: "Company 4",
    description: "Enterprise software specialists",
    color: "from-gray-800 to-gray-900"
  },
  {
    name: "Company 5",
    description: "Strategic partnership solutions",
    color: "from-gray-600 to-gray-800"
  }
];

export function PartneredCompaniesSection() {
  return (
    <section id="partnered-companies" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-left mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Partnered Companies
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Trusted partnerships with industry-leading companies to deliver exceptional solutions and services.
          </p>
        </motion.div>

        {/* Companies Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 3000,
                stopOnInteraction: false,
                stopOnMouseEnter: true,
              }),
            ]}
            className="w-full max-w-5xl mx-auto"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {partneredCompanies.map((company, index) => (
                <CarouselItem key={company.name} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <Card className="h-full hover:shadow-lg transition-all duration-300 border-0 bg-background/50 backdrop-blur-sm">
                      <CardContent className="p-6 text-center">
                        <div className={`w-16 h-16 rounded-lg bg-gradient-to-br ${company.color} flex items-center justify-center mx-auto mb-4`}>
                          <Building2 className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-xl font-semibold mb-2">{company.name}</h3>
                        <p className="text-muted-foreground text-sm">
                          {company.description}
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </motion.div>
      </div>
    </section>
  );
}
