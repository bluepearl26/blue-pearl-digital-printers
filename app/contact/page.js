'use client'

import { useState } from 'react'
import { Phone, Mail, MapPin, MessageCircle, CheckCircle } from 'lucide-react'
import Image from 'next/image'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // Frontend only - just show success message
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: '', phone: '', email: '', message: '' })
    }, 3000)
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div>
      {/* Hero */}
      <section className="bg-primary text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Get in touch with us for all your printing needs
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-6 text-primary">Send Us a Message</h2>
              {submitted ? (
                <div className="bg-green-100 border border-green-400 text-green-700 px-6 py-4 rounded-lg flex items-center gap-3">
                  <CheckCircle size={24} />
                  <span className="font-semibold">Thank you! We'll get back to you soon.</span>
                </div>
              ) : (
                <form
                action="https://formspree.io/f/mykjqllk"
                method="POST"
                className="space-y-6"
                  >
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold mb-2 text-gray-700">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold mb-2 text-gray-700">
                      Phone *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Your phone number"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold mb-2 text-gray-700">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold mb-2 text-gray-700">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Tell us about your printing needs..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-accent hover:bg-accent/90 text-white px-6 py-4 rounded-lg font-semibold text-lg transition-colors"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold mb-6 text-primary">Get In Touch</h2>
              <div className="space-y-6 mb-8">
                <a
                  href="tel:+919980166221"
                  className="flex items-start gap-4 p-4 bg-secondary rounded-lg hover:shadow-md transition-shadow"
                >
                  <div className="bg-primary rounded-full p-3">
                    <Phone className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-primary mb-1">Phone</h3>
                    <p className="text-gray-700">+91 9980166221</p>
                    <p className="text-gray-700">+91 8553666002</p>
                    <p className="text-sm text-gray-500 mt-1">Monday - Saturday: 9 AM - 7 PM</p>
                  </div>
                </a>

                <a
                  href="mailto:bluepearlprints@gmail.com"
                  className="flex items-start gap-4 p-4 bg-secondary rounded-lg hover:shadow-md transition-shadow"
                >
                  <div className="bg-primary rounded-full p-3">
                    <Mail className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-primary mb-1">Email</h3>
                    <p className="text-gray-700">bluepearlprints@gmail.com</p>
                    <p className="text-sm text-gray-500 mt-1">We'll respond within 24 hours</p>
                  </div>
                </a>

                <div className="flex items-start gap-4 p-4 bg-secondary rounded-lg">
                  <div className="bg-primary rounded-full p-3">
                    <MapPin className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-primary mb-1">Address</h3>
                    <p className="text-gray-700">Bengaluru, Karnataka</p>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="space-y-4">
                <a
                  href="tel:+919980166221"
                  className="w-full bg-primary hover:bg-primary/90 text-white px-6 py-4 rounded-lg font-semibold flex items-center justify-center gap-2 transition-colors"
                >
                  <Phone size={20} />
                  Call Now
                </a>
                <a
                  href="https://wa.me/919980166221"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-green-500 hover:bg-green-600 text-white px-6 py-4 rounded-lg font-semibold flex items-center justify-center gap-2 transition-colors"
                >
                  <MessageCircle size={20} />
                  WhatsApp Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Shop Image Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-primary">Visit Our Shop</h2>
          <div className="max-w-4xl mx-auto">
            <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/shop.jpg"
                alt="Blue Pearl Digital Printers Shop"
                fill
                className="object-cover"
              />
            </div>
            <div className="text-center mt-6">
              <p className="text-lg font-semibold text-primary mb-2">Blue Pearl Digital Printers</p>
              <p className="text-gray-700">Bengaluru, Karnataka</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
