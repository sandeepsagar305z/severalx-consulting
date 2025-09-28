"use client";

import { motion } from "framer-motion";
import { ExternalLink, Quote } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

const partnerWebsites = [
  {
    name: "Company One",
    logo: "/company-1-logo.png",
    description: "Supply Chain Automation Consulting: AI native consulting for fast moving companies.",
    url: "https://severalmillers.com/"
  },
  {
    name: "Company Two",
    logo: "/company-2-logo.png",
    description: "Cross-Border Trade Solutions: Optimizing supply chains across Asia, South America, and the United States.",
    url: "https://severalroutes.com/"
  },
  {
    name: "Company Three",
    logo: "/company-3-logo.png",
    description: "Your Global Innovation Lab: Delivering innovative technology solutions across Nairobi, Bangalore, and San Francisco.",
    url: "https://severalinnovations.com/"
  }
];

const inspirationalQuotes = [
  {
    quote: "Partnerships are not about finding the perfect person, but learning to see an imperfect person perfectly.",
    author: "Sam Keen"
  },
  {
    quote: "Consulting is not giving the right answer; it's providing the right guidance.",
    author: "Helen Keller"
  }
];

const testimonials = [
  {
    name: "Sarah Johnson",
    position: "CEO, TechCorp",
    company: "TechCorp Solutions",
    content: "Working with SeveralX has transformed our business operations. Their innovative solutions and dedicated support team have helped us achieve unprecedented growth.",
    rating: 5
  },
  {
    name: "Michael Chen",
    position: "CTO, DataFlow",
    company: "DataFlow Analytics",
    content: "The partnership with SeveralX has been exceptional. Their expertise in digital transformation has positioned us as industry leaders in data analytics.",
    rating: 5
  },
  {
    name: "Emma Rodriguez",
    position: "Director, CloudSecure",
    company: "CloudSecure Systems",
    content: "SeveralX's commitment to excellence and innovative approach has helped us deliver world-class cybersecurity solutions to our clients globally.",
    rating: 5
  },
  {
    name: "David Thompson",
    position: "VP Operations, InnovateNow",
    company: "InnovateNow Inc",
    content: "The collaboration with SeveralX has exceeded our expectations. Their strategic insights and technical expertise have been invaluable to our success.",
    rating: 5
  }
];

export function PartnersSection() {
  const [isHovered, setIsHovered] = useState(false);

  // Create extended testimonials array for seamless scrolling (duplicate testimonials)
  const extendedTestimonials = [...testimonials, ...testimonials, ...testimonials];

  return (
    <section id="partners" className="py-20 relative overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900/60 to-black"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(99,181,131,0.1),transparent_70%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(74,150,102,0.08),transparent_70%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(99,181,131,0.05),transparent_80%)]"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-left mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Partners
          </h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="max-w-3xl"
          >
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              Discover what our partners say about working with us. Real stories from real partnerships that drive innovation and success.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-[#61b280] to-[#4a9666] mt-6 rounded-full"></div>
          </motion.div>
        </motion.div>

        {/* Partner Websites Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20"
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
                    <img
                      src={website.logo}
                      alt={`${website.name} logo`}
                      className="w-full h-full object-contain transition-all duration-300 group-hover:scale-110"
                    />
                  </div>
                </CardHeader>
                <CardContent className="text-center pb-16">
                  <CardDescription className="text-gray-600 leading-relaxed text-lg font-semibold">
                    {website.description}
                  </CardDescription>
                </CardContent>
                <CardFooter className="absolute bottom-4 right-4 p-0">
                  <Button
                    asChild
                    size="sm"
                    className="bg-gradient-to-r from-[#61b280] to-[#4a9666] hover:from-[#4a9666] hover:to-[#61b280] text-white shadow-lg hover:shadow-xl transition-all duration-300"
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

        {/* Main Content - Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* Left Column - Inspirational Quotes */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="text-center lg:text-left mb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Quotes
              </h3>
              <p className="text-gray-400">
                Inspiring quotes about the power of partnerships
              </p>
            </div>

            <div className="relative h-96 overflow-hidden">
              <div className="flex flex-col space-y-4">
                {inspirationalQuotes.map((quote, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    className="relative flex-shrink-0"
                  >
                    <Card className="bg-white/5 backdrop-blur-xl border border-white/10 hover:border-[#61b280]/40 transition-all duration-500 relative overflow-hidden group p-6"
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
                        <blockquote className="text-sm text-gray-200 leading-relaxed text-center mb-3 italic">
                          &ldquo;{quote.quote}&rdquo;
                        </blockquote>

                        {/* Author Info */}
                        <div className="flex items-center justify-center space-x-3">
                          <div className="text-center">
                            <div className="font-semibold text-[#61b280] text-sm">
                              — {quote.author}
                            </div>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column - Scrolling Testimonials */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="text-center lg:text-left mb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Client Testimonials
              </h3>
              <p className="text-gray-400">
                What our partners say about working with us
              </p>
            </div>

            <div
              className="relative h-96 overflow-hidden"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <motion.div
                className="flex flex-col space-y-4"
                animate={{
                  y: isHovered ? 0 : [-20, -100, -180, -260, -340, -420, -500]
                }}
                transition={{
                  duration: isHovered ? 0 : 20,
                  repeat: isHovered ? 0 : Infinity,
                  ease: "linear"
                }}
              >
                {extendedTestimonials.map((testimonial, index) => (
                  <motion.div
                    key={`${testimonial.name}-${index}`}
                    className="flex-shrink-0"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <Card className="bg-white/5 backdrop-blur-xl border border-white/10 hover:border-[#61b280]/40 transition-all duration-500 relative overflow-hidden group p-6"
                    >
                      {/* Subtle gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-br from-[#61b280]/5 via-transparent to-[#4a9666]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                      <div className="relative z-10">
                        {/* Testimonial Content */}
                        <blockquote className="text-sm text-gray-200 leading-relaxed text-center mb-4 italic">
                          &ldquo;{testimonial.content}&rdquo;
                        </blockquote>

                        {/* Client Info */}
                        <div className="text-center">
                          <div className="font-semibold text-white text-sm">
                            {testimonial.name}
                          </div>
                          <div className="text-xs text-gray-400">
                            {testimonial.position}
                          </div>
                          <div className="text-xs text-[#61b280]">
                            {testimonial.company}
                          </div>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>


      </div>

    </section>
  );
}
