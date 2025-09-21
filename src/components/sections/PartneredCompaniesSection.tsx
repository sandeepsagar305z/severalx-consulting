"use client";

import { motion } from "framer-motion";
import { Building2 } from "lucide-react";
import Image from "next/image";

const partneredCompanies = [
  {
    name: "Company 1",
    logo: "/company-1-logo.png"
  },
  {
    name: "Company 2",
    logo: "/company-2-logo.png"
  },
  {
    name: "Company 3",
    logo: "/company-3-logo.png"
  },
  {
    name: "Company 4",
    logo: "/company-4-logo.png"
  }
];

// Duplicate logos for seamless scrolling
const scrollingLogos = [...partneredCompanies, ...partneredCompanies];

export function PartneredCompaniesSection() {
  return (
    <section id="partnered-companies" className="py-16" style={{ boxShadow: 'inset 0 0 35px rgba(97, 178, 128, 0.03)' }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-left mb-12"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white" style={{ textShadow: '0 2px 4px rgba(97, 178, 128, 0.08)' }}>
            Partnered Companies
          </h2>
          <p className="text-base text-white max-w-2xl" style={{ textShadow: '0 1px 2px rgba(97, 178, 128, 0.05)' }}>
            Trusted partnerships with industry-leading companies to deliver exceptional solutions and services.
          </p>
        </motion.div>

        {/* Scrolling Logos */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden"
        >
          {/* Gradient overlays for smooth fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-muted/30 to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-muted/30 to-transparent z-10"></div>

          {/* Scrolling container */}
          <div className="flex animate-scroll">
            {scrollingLogos.map((company, index) => (
              <motion.div
                key={`${company.name}-${index}`}
                className="flex-shrink-0 mx-8 group"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                <div
                  className="w-32 h-20 md:w-40 md:h-24 lg:w-48 lg:h-28 flex items-center justify-center bg-white/80 backdrop-blur-sm rounded-lg shadow-lg border border-gray-200/50 transition-all duration-300 group-hover:shadow-xl group-hover:bg-white/90"
                  style={{
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08), 0 2px 8px rgba(97, 178, 128, 0.12)',
                    border: '1px solid rgba(97, 178, 128, 0.08)'
                  }}
                >
                  <div className="relative w-full h-full flex items-center justify-center p-3">
                    <Image
                      src={company.logo}
                      alt={`${company.name} logo`}
                      width={120}
                      height={60}
                      className="w-full h-full object-contain transition-all duration-300 group-hover:scale-110 filter group-hover:brightness-110"
                      onError={(e) => {
                        // Fallback to icon if logo fails to load
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        const fallback = target.parentElement?.querySelector('.fallback-icon');
                        if (fallback) (fallback as HTMLElement).style.display = 'flex';
                      }}
                    />
                    <Building2 className="fallback-icon w-8 h-8 md:w-10 md:h-10 text-gray-500 transition-all duration-300 group-hover:scale-110 hidden items-center justify-center" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-100% / 2));
          }
        }

        .animate-scroll {
          animation: scroll 40s linear infinite;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
