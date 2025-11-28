"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink, Quote } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BACKGROUND_GRADIENTS, BRAND_COLORS } from "@/lib/constants";

/**
 * Partner website information
 */
const partnerWebsites = [
  {
    name: "Company One",
    logo: "/severalmillers-logo.png",
    description: "Supply Chain Automation Consulting: AI native consulting for fast moving companies.",
    url: "https://severalmillers.com/"
  },
  {
    name: "Company Two",
    logo: "/severalroutes-logo.png",
    description: "Cross-Border Trade Solutions: Optimizing supply chains across Asia, South America, and the United States.",
    url: "https://severalroutes.com/"
  },
  {
    name: "Company Three",
    logo: "/severalinnovations-logo.png",
    description: "Your Global Innovation Lab: Delivering innovative technology solutions across Nairobi, Bangalore, and the United States.",
    url: "https://severalinnovations.com/"
  }
] as const;

/**
 * Inspirational quotes about partnerships and consulting
 */
const inspirationalQuotes = [
  {
    quote: "Partnerships are not about finding the perfect person, but learning to see an imperfect person perfectly.",
    author: "Sam Keen"
  },
  {
    quote: "Consulting is not giving the right answer; it's providing the right guidance.",
    author: "Helen Keller"
  },
  {
    quote: "Alone we can do so little; together we can do so much.",
    author: "Helen Keller"
  },
  {
    quote: "The strength of the team is each individual member. The strength of each member is the team.",
    author: "Phil Jackson"
  }
] as const;

/**
 * Consulting Verticals section component displaying partner websites and inspirational quotes
 */
export function ConsultingVerticalsSection() {
  return (
    <section id="consulting-verticals" className="py-6 lg:py-8 relative overflow-hidden">
      {/* Background Effects */}
      <div className={`absolute inset-0 ${BACKGROUND_GRADIENTS.consultingVerticals.main}`}></div>
      <div className={`absolute inset-0 ${BACKGROUND_GRADIENTS.consultingVerticals.radial1}`}></div>
      <div className={`absolute inset-0 ${BACKGROUND_GRADIENTS.consultingVerticals.radial2}`}></div>
      <div className={`absolute inset-0 ${BACKGROUND_GRADIENTS.consultingVerticals.radial3}`}></div>

      {/* Seamless border blending - extended and ultra-subtle */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-gray-950/40 via-gray-950/10 to-transparent pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-900/40 via-gray-900/10 to-transparent pointer-events-none"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-left mb-8"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2">
            Consulting Verticals
          </h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="max-w-3xl"
          >
            <p className="text-base sm:text-lg text-white leading-relaxed">
            Our consulting verticals, powered by the Several X Platform
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-[#61b280] to-[#4a9666] mt-6 rounded-full"></div>
          </motion.div>
        </motion.div>

        {/* Partner Websites Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
        >
          {partnerWebsites.map((website, index) => (
            <motion.div
              key={website.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <Card className="relative h-full bg-white/80 backdrop-blur-sm border-gray-200/50 hover:bg-white/90 transition-all duration-300 hover:shadow-xl"
                style={{
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08), 0 2px 8px rgba(97, 178, 128, 0.12)',
                  border: '1px solid rgba(97, 178, 128, 0.08)'
                }}
              >
                <CardHeader className="flex justify-center">
                  <div className="w-36 h-20 flex items-center justify-center">
                    <Image
                      src={website.logo}
                      alt={`${website.name} logo`}
                      width={144}
                      height={80}
                      className="w-full h-full object-contain transition-all duration-300 group-hover:scale-110"
                    />
                  </div>
                </CardHeader>
                <CardContent className="text-center pb-16">
                  <CardDescription className="text-gray-600 leading-relaxed text-base sm:text-lg font-semibold">
                    {website.description}
                  </CardDescription>
                </CardContent>
                <CardFooter className="absolute bottom-4 right-4 p-0">
                  <Button
                    asChild
                    size="sm"
                    className={`${BRAND_COLORS.gradient.secondary} text-white shadow-lg hover:shadow-xl transition-all duration-300`}
                  >
                    <a
                      href={website.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      View Website
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Main Content - Client Testimonials Section */}
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="text-center mb-6">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                Client Testimonials
              </h3>
              <p className="text-sm sm:text-base text-white/70">
                Inspiring quotes about the power of partnerships
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {inspirationalQuotes.map((quote, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="relative flex-shrink-0"
                >
                  <Card className="bg-white/5 backdrop-blur-xl border border-white/10 hover:border-[#61b280]/40 transition-all duration-500 relative overflow-hidden group p-6 h-full"
                  >
                    {/* Subtle gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#61b280]/5 via-transparent to-[#4a9666]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    <div className="relative z-10">
                      {/* Star Rating */}
                      <div className="flex justify-center mb-3">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#61b280]/20 to-[#4a9666]/20 flex items-center justify-center">
                          <Quote className="w-4 h-4 text-[#61b280]" />
                        </div>
                      </div>

                      {/* Quote Content */}
                      <blockquote className="text-sm sm:text-base text-gray-200 leading-relaxed text-center mb-3 italic">
                        &ldquo;{quote.quote}&rdquo;
                      </blockquote>

                      {/* Author Info */}
                      <div className="flex items-center justify-center space-x-3">
                        <div className="text-center">
                          <div className="font-semibold text-[#61b280] text-xs sm:text-sm">
                            — {quote.author}
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>


      </div>

    </section>
  );
}
