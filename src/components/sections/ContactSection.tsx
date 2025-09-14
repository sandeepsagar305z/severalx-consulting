"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Mail, Phone, Send } from "lucide-react";


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
    <section id="contact" className="pt-6 pb-16 bg-muted/30" style={{ boxShadow: 'inset 0 0 40px rgba(97, 178, 128, 0.04)', scrollMarginTop: '80px' }}>
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
            Contact Us
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl" style={{ textShadow: '0 1px 2px rgba(97, 178, 128, 0.05)' }}>
            Get in touch with our team. We&apos;re here to help you succeed.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12 p-4" style={{ perspective: '1200px', boxShadow: 'inset 0 0 35px rgba(97, 178, 128, 0.03)' }}>
          {/* Profile Cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
            style={{ boxShadow: '0 0 22px rgba(97, 178, 128, 0.05)' }}
          >
            <h3 className="text-2xl font-bold mb-6" style={{ textShadow: '0 1px 3px rgba(97, 178, 128, 0.08)' }}>Meet Our Team</h3>

            {profileCards.map((profile, index) => (
              <motion.div
                key={profile.name}
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
                  className="h-full border-0 bg-background/50 backdrop-blur-sm transition-all duration-500 ease-out hover:shadow-[0_20px_40px_rgba(0,0,0,0.12),0_8px_16px_rgba(97,178,128,0.15)] hover:border-[#61b280]/20"
                  style={{
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08), 0 2px 8px rgba(97, 178, 128, 0.12), 0 0 25px rgba(97, 178, 128, 0.06)',
                    transform: 'translateZ(0)',
                    transformStyle: 'preserve-3d',
                    border: '1px solid rgba(97, 178, 128, 0.08)'
                  }}
                >
                  <CardContent className="p-6 transition-all duration-500 ease-out">
                    <div className="flex items-center space-x-4">
                      <Avatar className="w-16 h-16" style={{ transform: 'translateZ(6px)', boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)' }}>
                        <AvatarImage src={profile.image} alt={profile.name} />
                        <AvatarFallback
                          className="bg-gradient-to-br from-green-100 to-green-200 text-green-600 font-semibold transition-all duration-500 ease-out group-hover:shadow-lg"
                          style={{ boxShadow: '0 2px 8px rgba(97, 178, 128, 0.15)' }}
                        >
                          {profile.initials}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1" style={{ transform: 'translateZ(3px)' }}>
                        <h4 className="font-semibold text-lg mb-1 transition-all duration-500 ease-out" style={{ textShadow: '0 1px 2px rgba(97, 178, 128, 0.06)' }}>{profile.name}</h4>
                        <p className="text-sm text-muted-foreground mb-2 transition-all duration-500 ease-out">{profile.role}</p>
                        <div className="space-y-1" style={{ transform: 'translateZ(1px)' }}>
                          <div className="flex items-center space-x-2 text-sm transition-all duration-500 ease-out">
                            <Mail className="w-4 h-4 text-muted-foreground" style={{ filter: 'drop-shadow(0 0 4px rgba(97, 178, 128, 0.1))' }} />
                            <span>{profile.email}</span>
                          </div>
                          <div className="flex items-center space-x-2 text-sm transition-all duration-500 ease-out">
                            <Phone className="w-4 h-4 text-muted-foreground" style={{ filter: 'drop-shadow(0 0 4px rgba(97, 178, 128, 0.1))' }} />
                            <span>{profile.phone}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            style={{ boxShadow: '0 0 22px rgba(97, 178, 128, 0.05)' }}
          >
            <Card
              className="h-full border-0 bg-background/50 backdrop-blur-sm transition-all duration-500 ease-out hover:shadow-[0_20px_40px_rgba(0,0,0,0.12),0_8px_16px_rgba(97,178,128,0.15)] hover:border-[#61b280]/20"
              style={{
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.12), 0 4px 16px rgba(97, 178, 128, 0.1), 0 0 25px rgba(97, 178, 128, 0.06)',
                border: '1px solid rgba(97, 178, 128, 0.08)'
              }}
            >
              <CardContent className="p-4 transition-all duration-500 ease-out">
                <h3 className="text-2xl font-bold mb-2" style={{ textShadow: '0 1px 3px rgba(97, 178, 128, 0.08)' }}>Send Us a Message</h3>
                <form className="space-y-3">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div style={{ boxShadow: '0 0 12px rgba(97, 178, 128, 0.04)' }}>
                      <label htmlFor="firstName" className="block text-sm font-medium mb-1">
                        First Name
                      </label>
                      <Input
                        id="firstName"
                        type="text"
                        placeholder="Your first name"
                        className="w-full border-gray-200 focus:border-[#61b280] focus:ring-[#61b280]"
                        style={{ boxShadow: 'inset 0 0 8px rgba(97, 178, 128, 0.03)' }}
                      />
                    </div>
                    <div style={{ boxShadow: '0 0 12px rgba(97, 178, 128, 0.04)' }}>
                      <label htmlFor="lastName" className="block text-sm font-medium mb-1">
                        Last Name
                      </label>
                      <Input
                        id="lastName"
                        type="text"
                        placeholder="Your last name"
                        className="w-full border-gray-200 focus:border-[#61b280] focus:ring-[#61b280]"
                        style={{ boxShadow: 'inset 0 0 8px rgba(97, 178, 128, 0.03)' }}
                      />
                    </div>
                  </div>

                  <div style={{ boxShadow: '0 0 12px rgba(97, 178, 128, 0.04)' }}>
                    <label htmlFor="email" className="block text-sm font-medium mb-1">
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your.email@example.com"
                      className="w-full border-gray-200 focus:border-[#61b280] focus:ring-[#61b280]"
                      style={{ boxShadow: 'inset 0 0 8px rgba(97, 178, 128, 0.03)' }}
                    />
                  </div>

                  <div style={{ boxShadow: '0 0 12px rgba(97, 178, 128, 0.04)' }}>
                    <label htmlFor="subject" className="block text-sm font-medium mb-1">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      type="text"
                      placeholder="How can we help you?"
                      className="w-full border-gray-200 focus:border-[#61b280] focus:ring-[#61b280]"
                      style={{ boxShadow: 'inset 0 0 8px rgba(97, 178, 128, 0.03)' }}
                    />
                  </div>

                  <div style={{ boxShadow: '0 0 12px rgba(97, 178, 128, 0.04)' }}>
                    <label htmlFor="message" className="block text-sm font-medium mb-1">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your project or inquiry..."
                      className="w-full min-h-[60px] border-gray-200 focus:border-[#61b280] focus:ring-[#61b280]"
                      style={{ boxShadow: 'inset 0 0 8px rgba(97, 178, 128, 0.03)' }}
                    />
                  </div>

                  <Button
                    size="lg"
                    className="w-full px-8 py-4 text-lg font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-500 ease-out group"
                    style={{
                      backgroundColor: '#61b280',
                      boxShadow: '0 0 20px rgba(97, 178, 128, 0.6), 0 0 40px rgba(97, 178, 128, 0.4), 0 4px 20px rgba(97, 178, 128, 0.2)',
                      border: '1px solid rgba(97, 178, 128, 0.3)'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.boxShadow = '0 0 30px rgba(97, 178, 128, 0.8), 0 0 60px rgba(97, 178, 128, 0.6), 0 6px 30px rgba(97, 178, 128, 0.3)';
                      e.currentTarget.style.transform = 'translateY(-2px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.boxShadow = '0 0 20px rgba(97, 178, 128, 0.6), 0 0 40px rgba(97, 178, 128, 0.4), 0 4px 20px rgba(97, 178, 128, 0.2)';
                      e.currentTarget.style.transform = 'translateY(0)';
                    }}
                  >
                    Send Message
                    <Send className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
