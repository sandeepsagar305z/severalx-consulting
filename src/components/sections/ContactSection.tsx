"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Mail, Phone, Send, User, UserCheck, MessageSquare, FileText } from "lucide-react";


const profileCards = [
  {
    name: "Jesse Miller",
    role: "CEO & Founder",
    email: "Jesse@severalx.com",
    phone: "+1 (555) 123-4567",
    image: "/api/placeholder/150/150",
    initials: "SJ"
  },
  {
    name: "Michael Chen",
    role: "Head of Consulting",
    email: "michael@severalx.com",
    phone: "+1 (555) 765-4321",
    image: "/api/placeholder/150/150",
    initials: "MC"
  }
];

export function ContactSection() {
  return (
    <section id="contact" className="py-16 relative overflow-hidden" style={{ scrollMarginTop: '80px' }}>
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#63b583]/3 to-[#63b583]/5"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-left mb-12"
          viewport={{ once: true }}
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent leading-tight"
          >
            Contact Us
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-lg text-gray-300 max-w-3xl leading-relaxed"
          >
            Get in touch with our team. We&apos;re here to help you succeed.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Team Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8 pt-4"
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-white mb-8">Meet Our Team</h3>

            <div className="space-y-8">
              {profileCards.map((profile, index) => (
                <motion.div
                  key={profile.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <Card className="bg-white/5 backdrop-blur-sm border border-white/10 hover:border-[#63b583]/30 hover:bg-white/10 transition-all duration-500 hover:shadow-xl hover:shadow-[#63b583]/10 hover:-translate-y-1">
                    <CardContent className="p-8">
                      <div className="flex items-center space-x-4">
                        <Avatar className="w-16 h-16 ring-2 ring-[#63b583]/20 group-hover:ring-[#63b583]/40 transition-all duration-300">
                          <AvatarImage src={profile.image} alt={profile.name} />
                          <AvatarFallback className="bg-gradient-to-br from-[#63b583] to-[#4a9666] text-white font-semibold">
                            {profile.initials}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <h4 className="font-semibold text-lg mb-1 text-white group-hover:text-[#63b583] transition-colors duration-300">{profile.name}</h4>
                          <p className="text-gray-400 mb-3 text-sm">{profile.role}</p>
                          <div className="space-y-2">
                            <div className="flex items-center space-x-2 text-sm text-gray-300">
                              <Mail className="w-4 h-4 text-[#63b583]" />
                              <span className="hover:text-[#63b583] transition-colors duration-300">{profile.email}</span>
                            </div>
                            <div className="flex items-center space-x-2 text-sm text-gray-300">
                              <Phone className="w-4 h-4 text-[#63b583]" />
                              <span className="hover:text-[#63b583] transition-colors duration-300">{profile.phone}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="pt-4"
            viewport={{ once: true }}
          >
            <Card className="bg-white/10 backdrop-blur-xl border border-white/30 shadow-2xl shadow-black/20 hover:shadow-3xl hover:shadow-black/30 transition-all duration-700 group">
              <CardContent className="p-6 relative">
                {/* Subtle inner glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/5 rounded-lg pointer-events-none"></div>
                <h3 className="text-2xl font-bold mb-4 text-white">Send Us a Message</h3>
                <motion.form
                  className="space-y-5"
                  initial="hidden"
                  animate="visible"
                  variants={{
                    hidden: {},
                    visible: {
                      transition: {
                        staggerChildren: 0.1,
                      },
                    },
                  }}
                >
                  <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                    }}
                  >
                    <motion.div
                      variants={{
                        hidden: { opacity: 0, x: -20 },
                        visible: { opacity: 1, x: 0, transition: { duration: 0.4 } },
                      }}
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    >
                      <label htmlFor="firstName" className="flex items-center text-sm font-medium mb-2 text-white">
                        <User className="w-4 h-4 mr-2 text-[#63b583]" />
                        First Name
                      </label>
                      <div className="relative">
                        <Input
                          id="firstName"
                          type="text"
                          placeholder="Your first name"
                          className="bg-white/5 border-white/20 text-white !placeholder-gray-200 focus:border-[#63b583] focus:ring-2 focus:ring-[#63b583]/30 focus:bg-white/10 hover:border-white/30 hover:bg-white/8 transition-all duration-300 pl-4 pr-4 shadow-sm focus:shadow-lg focus:shadow-[#63b583]/20"
                        />
                      </div>
                    </motion.div>
                    <motion.div
                      variants={{
                        hidden: { opacity: 0, x: 20 },
                        visible: { opacity: 1, x: 0, transition: { duration: 0.4 } },
                      }}
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    >
                      <label htmlFor="lastName" className="flex items-center text-sm font-medium mb-2 text-white">
                        <UserCheck className="w-4 h-4 mr-2 text-[#63b583]" />
                        Last Name
                      </label>
                      <div className="relative">
                        <Input
                          id="lastName"
                          type="text"
                          placeholder="Your last name"
                          className="bg-white/5 border-white/20 text-white !placeholder-gray-200 focus:border-[#63b583] focus:ring-2 focus:ring-[#63b583]/30 focus:bg-white/10 hover:border-white/30 hover:bg-white/8 transition-all duration-300 pl-4 pr-4 shadow-sm focus:shadow-lg focus:shadow-[#63b583]/20"
                        />
                      </div>
                    </motion.div>
                  </motion.div>

                  <motion.div
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.2 } },
                    }}
                    whileHover={{ scale: 1.01 }}
                    transition={{ duration: 0.2 }}
                  >
                    <label htmlFor="email" className="flex items-center text-sm font-medium mb-2 text-white">
                      <Mail className="w-4 h-4 mr-2 text-[#63b583]" />
                      Email
                    </label>
                    <div className="relative">
                      <Input
                        id="email"
                        type="email"
                        placeholder="your.email@example.com"
                        className="bg-white/5 border-white/20 text-white !placeholder-gray-200 focus:border-[#63b583] focus:ring-2 focus:ring-[#63b583]/30 focus:bg-white/10 hover:border-white/30 hover:bg-white/8 transition-all duration-300 pl-4 pr-4 shadow-sm focus:shadow-lg focus:shadow-[#63b583]/20"
                      />
                    </div>
                  </motion.div>

                  <motion.div
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.3 } },
                    }}
                    whileHover={{ scale: 1.01 }}
                    transition={{ duration: 0.2 }}
                  >
                    <label htmlFor="subject" className="flex items-center text-sm font-medium mb-2 text-white">
                      <FileText className="w-4 h-4 mr-2 text-[#63b583]" />
                      Subject
                    </label>
                    <div className="relative">
                      <Input
                        id="subject"
                        type="text"
                        placeholder="How can we help you?"
                        className="bg-white/5 border-white/20 text-white !placeholder-gray-200 focus:border-[#63b583] focus:ring-2 focus:ring-[#63b583]/30 focus:bg-white/10 hover:border-white/30 hover:bg-white/8 transition-all duration-300 pl-4 pr-4 shadow-sm focus:shadow-lg focus:shadow-[#63b583]/20"
                      />
                    </div>
                  </motion.div>

                  <motion.div
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.4 } },
                    }}
                    whileHover={{ scale: 1.01 }}
                    transition={{ duration: 0.2 }}
                  >
                    <label htmlFor="message" className="flex items-center text-sm font-medium mb-2 text-white">
                      <MessageSquare className="w-4 h-4 mr-2 text-[#63b583]" />
                      Message
                    </label>
                    <div className="relative">
                      <Textarea
                        id="message"
                        placeholder="Tell us about your project or inquiry..."
                        className="bg-white/5 border-white/20 text-white !placeholder-gray-200 focus:border-[#63b583] focus:ring-2 focus:ring-[#63b583]/30 focus:bg-white/10 hover:border-white/30 hover:bg-white/8 transition-all duration-300 min-h-[120px] resize-none pl-4 pr-4 shadow-sm focus:shadow-lg focus:shadow-[#63b583]/20"
                      />
                    </div>
                  </motion.div>

                  <motion.div
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.5 } },
                    }}
                  >
                    <Button className="w-full bg-gradient-to-r from-[#63b583] via-[#5aa676] to-[#4a9666] hover:from-[#4a9666] hover:via-[#5aa676] hover:to-[#63b583] text-white border-0 shadow-lg shadow-[#63b583]/25 hover:shadow-2xl hover:shadow-[#63b583]/40 transition-all duration-500 hover:-translate-y-1 group relative overflow-hidden">
                      <span className="relative z-10 flex items-center justify-center">
                        Send Message
                        <Send className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></div>
                    </Button>
                  </motion.div>
                </motion.form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
