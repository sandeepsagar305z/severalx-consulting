"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, Briefcase, GraduationCap, ArrowRight } from "lucide-react";

const services = [
  {
    title: "Software Assurance & Support",
    description: "24/7 technical support, security updates, and system maintenance to keep your software running smoothly and securely.",
    icon: Shield,
    color: "from-black to-green-700"
  },
  {
    title: "Professional Services",
    description: "Expert consulting, implementation, and customization services to maximize your technology investments.",
    icon: Briefcase,
    color: "from-green-700 to-black"
  },
  {
    title: "Training",
    description: "Comprehensive training programs to empower your team with the skills needed to effectively use our solutions.",
    icon: GraduationCap,
    color: "from-black to-green-600"
  }
];

export function ServicesSection() {
  return (
    <section id="services" className="pt-20 pb-16 bg-muted/30" style={{ boxShadow: 'inset 0 0 40px rgba(97, 178, 128, 0.04)', scrollMarginTop: '80px' }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8" style={{ boxShadow: '0 0 30px rgba(97, 178, 128, 0.06)' }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-left mb-12 p-6"
          style={{ boxShadow: '0 0 25px rgba(97, 178, 128, 0.07)' }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4" style={{ textShadow: '0 2px 4px rgba(97, 178, 128, 0.08)' }}>
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl" style={{ textShadow: '0 1px 2px rgba(97, 178, 128, 0.05)' }}>
            Comprehensive solutions to support your business growth and ensure success with our products.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 p-4"
          style={{ perspective: '1200px', boxShadow: 'inset 0 0 35px rgba(97, 178, 128, 0.03)' }}
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
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
                y: -6,
                transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }
              }}
            >
              <Card
                className="h-full border-0 bg-background/50 backdrop-blur-sm gap-0 transition-all duration-500 ease-out hover:shadow-[0_20px_40px_rgba(0,0,0,0.12),0_8px_16px_rgba(97,178,128,0.15)] hover:border-[#61b280]/20"
                style={{
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08), 0 2px 8px rgba(97, 178, 128, 0.12), 0 0 25px rgba(97, 178, 128, 0.06)',
                  transform: 'translateZ(0)',
                  transformStyle: 'preserve-3d',
                  border: '1px solid rgba(97, 178, 128, 0.08)'
                }}
              >
                <CardHeader className="text-center pb-4 transition-all duration-500 ease-out">
                  <div
                    className={`w-12 h-12 rounded-lg bg-gradient-to-br ${service.color} flex items-center justify-center mx-auto mb-4 transition-all duration-500 ease-out group-hover:shadow-lg`}
                    style={{
                      transform: 'translateZ(6px)',
                      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
                    }}
                  >
                    <service.icon className="w-6 h-6 text-white transition-transform duration-300 group-hover:scale-105" />
                  </div>
                  <CardTitle
                    className="text-xl mb-2 transition-all duration-500 ease-out"
                    style={{ transform: 'translateZ(3px)' }}
                  >
                    {service.title}
                  </CardTitle>
                  <CardDescription
                    className="text-sm leading-relaxed transition-all duration-500 ease-out"
                    style={{ transform: 'translateZ(1px)' }}
                  >
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0 transition-all duration-500 ease-out" style={{ transform: 'translateZ(1px)' }}>
                  <Button
                    style={{
                      backgroundColor: '#61b280',
                      transform: 'translateZ(4px)',
                      boxShadow: '0 2px 12px rgba(97, 178, 128, 0.2)',
                      border: '1px solid rgba(97, 178, 128, 0.1)'
                    }}
                    className="w-full justify-between group text-white hover:bg-[#61b280]/90 transition-all duration-500 ease-out group-hover:shadow-[0_6px_20px_rgba(97,178,128,0.25)] group-hover:transform group-hover:translate-y-[-1px]"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
