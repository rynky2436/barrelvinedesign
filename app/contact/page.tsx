"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Phone, Mail, MapPin, Clock, ArrowRight } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    projectType: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-stone-900 via-amber-900 to-stone-800">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=600&width=1200&query=contact+workshop+phone+communication')] bg-cover bg-center opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />

        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 font-playfair">
            Commission
            <span className="block text-amber-300">Your Vision</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-stone-200 leading-relaxed">
            Ready to commission your custom laser engraving project? We'd love to bring your vision to life.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="border-0 shadow-xl">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold text-stone-800 mb-6 font-playfair">Commission Your Project</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name" className="text-stone-700 font-medium">
                        Name *
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="mt-1"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-stone-700 font-medium">
                        Email *
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="mt-1"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="phone" className="text-stone-700 font-medium">
                        Phone
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        className="mt-1"
                        placeholder="(555) 123-4567"
                      />
                    </div>
                    <div>
                      <Label htmlFor="company" className="text-stone-700 font-medium">
                        Winery/Brewery Name
                      </Label>
                      <Input
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="mt-1"
                        placeholder="Your establishment name"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="projectType" className="text-stone-700 font-medium">
                      Project Type
                    </Label>
                    <select
                      id="projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      className="mt-1 w-full px-3 py-2 border border-stone-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                    >
                      <option value="">Select a project type</option>
                      <option value="winery-branding">Winery Branding Solutions</option>
                      <option value="brewery-merchandise">Brewery Merchandise</option>
                      <option value="custom-signage">Custom Signage</option>
                      <option value="promotional-items">Promotional Items</option>
                      <option value="awards-plaques">Awards & Plaques</option>
                      <option value="other">Other/Custom Project</option>
                    </select>
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-stone-700 font-medium">
                      Project Details *
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="mt-1"
                      placeholder="Tell us about your project, timeline, and any specific requirements..."
                    />
                  </div>

                  <Button type="submit" className="w-full bg-amber-600 hover:bg-amber-700 text-lg py-3">
                    Commission This Project
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-stone-800 mb-6 font-playfair">Contact Information</h3>
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <Phone className="w-6 h-6 text-amber-600 mt-1 mr-4 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-stone-800 mb-1">Phone</h4>
                        <p className="text-stone-600">(301) 748-8360</p>
                        <p className="text-sm text-stone-500">Call for immediate assistance</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <Mail className="w-6 h-6 text-amber-600 mt-1 mr-4 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-stone-800 mb-1">Email</h4>
                        <p className="text-stone-600">info@barrelvinedesigns.com</p>
                        <p className="text-sm text-stone-500">We respond within 24 hours</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <MapPin className="w-6 h-6 text-amber-600 mt-1 mr-4 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-stone-800 mb-1">Service Area</h4>
                        <p className="text-stone-600">Washington, D.C. Metro</p>
                        <p className="text-sm text-stone-500">Maryland, Virginia, and D.C.</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <Clock className="w-6 h-6 text-amber-600 mt-1 mr-4 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-stone-800 mb-1">Business Hours</h4>
                        <p className="text-stone-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
                        <p className="text-stone-600">Saturday: 10:00 AM - 4:00 PM</p>
                        <p className="text-sm text-stone-500">Closed Sundays</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-stone-800 mb-6 font-playfair">Ready to Commission?</h3>
                  <p className="text-stone-600 mb-6 leading-relaxed">
                    Have a vision ready to bring to life or need an urgent project? Give us a call directly. We
                    understand that timing is crucial in the wine and craft beer industry.
                  </p>
                  <Button className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-semibold">
                    <Phone className="w-4 h-4 mr-2" />
                    Commission Now: (301) 748-8360
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-stone-800 mb-6 font-playfair">What to Expect</h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-amber-600 rounded-full mt-2 mr-3 flex-shrink-0" />
                      <p className="text-stone-600">Initial consultation within 24 hours</p>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-amber-600 rounded-full mt-2 mr-3 flex-shrink-0" />
                      <p className="text-stone-600">Custom design proposal within 3-5 business days</p>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-amber-600 rounded-full mt-2 mr-3 flex-shrink-0" />
                      <p className="text-stone-600">Detailed quote with timeline and pricing</p>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-amber-600 rounded-full mt-2 mr-3 flex-shrink-0" />
                      <p className="text-stone-600">Regular updates throughout production</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-stone-800 mb-4 font-playfair">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-stone-600">Quick answers to common questions</p>
          </div>

          <div className="space-y-8">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-stone-800 mb-3">What's your typical turnaround time?</h3>
                <p className="text-stone-600">
                  Most projects are completed within 2-3 weeks from design approval. Rush orders can often be
                  accommodated with 1-week turnaround for an additional fee.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-stone-800 mb-3">Do you provide design services?</h3>
                <p className="text-stone-600">
                  Yes! Our creative team can work with your existing branding or create custom designs from scratch. We
                  include initial design concepts in our project quotes.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-stone-800 mb-3">What materials do you work with?</h3>
                <p className="text-stone-600">
                  We work with wood, acrylic, metal, glass, and leather. All materials are food-safe and suitable for
                  use in winery and brewery environments.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-stone-800 mb-3">Do you offer installation services?</h3>
                <p className="text-stone-600">
                  For larger signage and permanent installations, we provide full installation services throughout the
                  DMV area. Smaller items are delivered ready to use.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
