"use client";

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, Send, User, MessageSquare, FileText, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { TeamMember } from "@/components/ui/team-member";
import { BRAND_COLORS, BACKGROUND_GRADIENTS } from "@/lib/constants";

export function ContactSection() {
  // Form state management
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    service: ''
  })

  // Form status state (loading, success, error)
  const [formStatus, setFormStatus] = useState<{
    loading: boolean
    success: boolean
    error: string | null
  }>({
    loading: false,
    success: false,
    error: null
  })

  /**
   * Handle form submission
   * Sends data to API endpoint and provides user feedback
   */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Reset status before submission
    setFormStatus({ loading: true, success: false, error: null })

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      // Check if response is JSON before parsing
      const contentType = response.headers.get('content-type')
      if (!contentType || !contentType.includes('application/json')) {
        // If we get an HTML response instead of JSON, it's likely a server error
        const text = await response.text()
        console.error('Received non-JSON response:', text.substring(0, 200))
        throw new Error('Server error occurred. Please try again later or contact support if the problem persists.')
      }

      let data
      try {
        data = await response.json()
      } catch (parseError) {
        console.error('Failed to parse JSON response:', parseError)
        throw new Error('Invalid server response. Please try again later.')
      }

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message')
      }

      // Success - clear form and show success message
      setFormStatus({ loading: false, success: true, error: null })

      // Clear form fields
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
        service: ''
      })

      // Reset success message after 5 seconds
      setTimeout(() => {
        setFormStatus(prev => ({ ...prev, success: false }))
      }, 5000)

    } catch (error: unknown) {
      // Error handling - show error message
      setFormStatus({
        loading: false,
        success: false,
        error: error instanceof Error ? error.message : 'Something went wrong. Please try again.'
      })

      // Clear error message after 5 seconds
      setTimeout(() => {
        setFormStatus(prev => ({ ...prev, error: null }))
      }, 5000)
    }
  }

  /**
   * Handle form input changes
   * Updates form data and clears any existing errors
   */
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })

    // Clear any existing errors when user starts typing
    if (formStatus.error) {
      setFormStatus(prev => ({ ...prev, error: null }))
    }
  }

  return (
    <section id="contact" className="py-4 lg:py-6 relative overflow-hidden" style={{ scrollMarginTop: '80px' }}>
      {/* Background Effects */}
      <div className={`absolute inset-0 ${BACKGROUND_GRADIENTS.contact.main}`}></div>
      <div className={`absolute inset-0 ${BACKGROUND_GRADIENTS.contact.radial1}`}></div>
      <div className={`absolute inset-0 ${BACKGROUND_GRADIENTS.contact.radial2}`}></div>
      <div className={`absolute inset-0 ${BACKGROUND_GRADIENTS.contact.radial3}`}></div>

      {/* Seamless border blending - extended and ultra-subtle */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-gray-900/40 via-gray-900/10 to-transparent pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-900/40 via-gray-900/10 to-transparent pointer-events-none"></div>

      <div className="container mx-auto px-3 sm:px-4 lg:px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-left mb-6"
          viewport={{ once: true }}
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent leading-tight"
          >
            Contact Us
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-lg text-white/80 max-w-3xl leading-relaxed"
          >
            Get in touch with our team. We&apos;re here to help you succeed.
          </motion.p>
        </motion.div>

        <div className="flex flex-col xl:flex-row gap-4 lg:gap-5 items-stretch">
          {/* Left Section: Team Member Information */}
          <div className="flex flex-col gap-3 lg:gap-4 flex-1 justify-between h-full">
            <div className="flex flex-col gap-3 lg:gap-4 h-full justify-between">
              {/* Jesse Miller - Managing Director Profile */}
              <TeamMember
                imageSrc="/profile-jesse-miller.jpg"
                name="Jesse Miller"
                title="Managing Director"
                location="San Francisco, USA"
                email="jesse@severalmillers.com"
                linkedinUrl="https://www.linkedin.com/in/jesse-miller-67711030"
                quote="Specializes in AI development and system implementation, helping businesses leverage advanced automation."
              />

              {/* Placeholder Profile */}
              <TeamMember
                imageSrc="/api/placeholder/150/150"
                name="Jane Smith"
                title="Operations Director"
                location="New York, USA"
                email="jane@severalx.com"
                linkedinUrl="https://www.linkedin.com/in/jane-smith"
                quote="Experienced operations leader with a passion for process optimization and team development."
              />
            </div>
          </div>

          {/* Right Section: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative bg-white/10 backdrop-blur-xl border border-white/30 rounded-3xl shadow-2xl w-full max-w-xl flex-1 flex flex-col justify-center self-stretch min-h-full p-0 overflow-hidden ring-1 ring-white/20"
          >
            {/* Form Header */}
            <div className="px-3 py-1 flex flex-col gap-1">
              <div className="flex items-center gap-3 mb-1">
                <h3 className="text-xl font-bold text-white mb-0">
                  Schedule Your Free Consultation
                </h3>
              </div>

              <p className="text-sm sm:text-base text-white/80 mb-3 sm:mb-4">
                Connect with our marketing technology experts today. We&apos;ll help you build, implement, and optimize marketing stacks that drive growth and deliver exceptional customer experiences.
              </p>

              {/* Form Status Messages (Success/Error) */}
              <AnimatePresence mode="wait">
                {formStatus.success && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-xl flex items-center gap-2"
                  >
                    <CheckCircle className="h-5 w-5 flex-shrink-0" />
                    <span>Message sent successfully! We&apos;ll be in touch soon.</span>
                  </motion.div>
                )}

                {formStatus.error && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-xl flex items-center gap-2"
                  >
                    <AlertCircle className="h-5 w-5 flex-shrink-0" />
                    <span>{formStatus.error}</span>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Contact Form Fields */}
              <form onSubmit={handleSubmit} className="space-y-2 mt-1">
                {/* Name and Email Fields */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 md:gap-2">
                  <div>
                    <label htmlFor="name" className="flex items-center text-sm font-medium mb-1 text-white">
                      <User className="w-4 h-4 mr-2 text-[#63b583]" />
                      Name <span className="text-white">*</span>
                    </label>
                    <Input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="bg-white/5 border-white/20 text-white !placeholder-gray-400 focus:border-[#63b583] focus:ring-2 focus:ring-[#63b583]/30 focus:bg-white/10 hover:border-white/30 hover:bg-white/8 transition-all duration-300"
                      placeholder="Your Name"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="flex items-center text-sm font-medium mb-1 text-white">
                      <Mail className="w-4 h-4 mr-2 text-[#63b583]" />
                      Email <span className="text-white">*</span>
                    </label>
                      <Input
                      type="email"
                        id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="bg-white/5 border-white/20 text-white !placeholder-gray-400 focus:border-[#63b583] focus:ring-2 focus:ring-[#63b583]/30 focus:bg-white/10 hover:border-white/30 hover:bg-white/8 transition-all duration-300"
                      placeholder="you@email.com"
                      required
                      />
                    </div>
                </div>

                {/* Phone and Service Fields */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 md:gap-2">
                  <div>
                    <label htmlFor="phone" className="flex items-center text-sm font-medium mb-1 text-white">
                      <Phone className="w-4 h-4 mr-2 text-[#63b583]" />
                      Phone Number
                    </label>
                    <Input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="bg-white/5 border-white/20 text-white !placeholder-gray-400 focus:border-[#63b583] focus:ring-2 focus:ring-[#63b583]/30 focus:bg-white/10 hover:border-white/30 hover:bg-white/8 transition-all duration-300"
                      placeholder="(555) 987-6543"
                    />
                  </div>
                  <div className="relative">
                    <label htmlFor="service" className="flex items-center text-sm font-medium mb-1 text-white">
                      <FileText className="w-4 h-4 mr-2 text-[#63b583]" />
                      Service Interest
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full bg-white/5 border-white/20 text-white !placeholder-gray-400 focus:border-[#63b583] focus:ring-2 focus:ring-[#63b583]/30 focus:bg-white/10 hover:border-white/30 hover:bg-white/8 transition-all duration-300 rounded-md px-3 py-2 appearance-none pr-10"
                    >
                      <option value="" className="bg-black text-white">Select a service</option>
                      <option value="CRM" className="bg-black text-white">
                        CRM
                      </option>
                      <option value="Project Management" className="bg-black text-white">Project Management</option>
                      <option value="Knowledge Base" className="bg-black text-white">Knowledge Base</option>
                    </select>
                    {/* Dropdown arrow icon */}
                    <svg
                      className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#63b583]"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />
                    </svg>
                  </div>
                    </div>

                {/* Message Field */}
                <div>
                    <label htmlFor="message" className="flex items-center text-sm font-medium mb-1 text-white">
                      <MessageSquare className="w-4 h-4 mr-2 text-[#63b583]" />
                    How can we help you? <span className="text-white">*</span>
                    </label>
                      <Textarea
                        id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="bg-white/5 border-white/20 text-white !placeholder-gray-400 focus:border-[#63b583] focus:ring-2 focus:ring-[#63b583]/30 focus:bg-white/10 hover:border-white/30 hover:bg-white/8 transition-all duration-300 min-h-[80px] resize-none"
                    rows={4}
                    placeholder="Tell us about your project, challenge, or question..."
                    required
                      />
                    </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={formStatus.loading}
                  className={`w-full ${BRAND_COLORS.gradient.primary} text-white border-0 shadow-lg shadow-[#63b583]/25 hover:shadow-2xl hover:shadow-[#63b583]/40 transition-all duration-500 hover:-translate-y-1 group relative overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed`}
                >
                  {formStatus.loading ? (
                    <>
                      <Loader2 className="h-5 w-5 animate-spin mr-2" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2 transition-transform duration-300 group-hover:translate-x-1" />
                        Send Message
                    </>
                  )}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></div>
                    </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
