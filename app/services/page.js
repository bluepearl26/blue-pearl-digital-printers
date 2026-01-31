'use client'

import Image from 'next/image'
import Link from 'next/link'
import { CreditCard, FileText, Flag, Image as ImageIcon, Sparkles, Mail, FileCheck, FolderOpen, Printer } from 'lucide-react'

export default function Services() {
  const services = [
    {
      title: 'Business Cards',
      icon: CreditCard,
      image: '/service-business-cards.jpg',
      description: 'Make a lasting first impression with premium quality business cards. Available in various finishes including matte, glossy, and textured options.',
    },
    {
      title: 'Brochures & Flyers',
      icon: FileText,
      image: '/service-business-cards.jpg',
      description: 'Eye-catching brochures and flyers that effectively communicate your message. Perfect for marketing campaigns, product launches, and events.',
    },
    {
      title: 'Banners & Flex Printing',
      icon: Flag,
      image: '/service-banners.jpg',
      description: 'Large format printing for banners, flex boards, and outdoor advertising. Weather-resistant materials with vibrant, long-lasting colors.',
    },
    {
      title: 'Posters & Signage',
      icon: ImageIcon,
      image: '/service-posters.jpg',
      description: 'High-quality posters and signage for indoor and outdoor use. Available in multiple sizes and materials to suit your needs.',
    },
    {
      title: 'Envelopes',
      icon: Mail,
      image: '/service-business-cards.jpg',
      description: 'Professional custom envelopes for business correspondence. Available in various sizes with options for custom printing and branding.',
    },
    {
      title: 'Prescription Pads',
      icon: FileCheck,
      image: '/service-business-cards.jpg',
      description: 'Customized prescription pads for medical professionals. High-quality printing with security features and professional layouts.',
    },
    {
      title: 'Customised File Covers',
      icon: FolderOpen,
      image: '/service-posters.jpg',
      description: 'Professional file covers with custom designs and branding. Perfect for organizing documents while maintaining a corporate identity.',
    },
    {
      title: 'Custom Prints',
      icon: Sparkles,
      image: '/service-posters.jpg',
      description: 'Have a unique printing requirement? We offer custom solutions including packaging, labels, stickers, and more. Contact us to discuss your project.',
    },
  ]

  return (
    <div>
      {/* Hero */}
      <section className="bg-primary text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Professional printing solutions for every business need
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div
                key={index}
                className={`grid md:grid-cols-2 gap-8 items-center ${
                  index % 2 === 1 ? 'md:flex-row-reverse' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                  <div className="bg-primary rounded-full w-16 h-16 flex items-center justify-center mb-4">
                    <service.icon className="text-white" size={32} />
                  </div>
                  <h2 className="text-3xl font-bold mb-4 text-primary">{service.title}</h2>
                  <p className="text-lg text-gray-700 mb-6">{service.description}</p>
                  <Link
                    href="/contact"
                    className="bg-accent hover:bg-accent/90 text-white px-6 py-3 rounded-lg font-semibold inline-block transition-colors"
                  >
                    Get Quote
                  </Link>
                </div>
                <div className={`relative h-[400px] rounded-lg overflow-hidden shadow-xl ${
                  index % 2 === 1 ? 'md:order-1' : ''
                }`}>
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-8 text-primary">We Also Offer</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2 text-primary">Photo Printing</h3>
              <p className="text-gray-700">High-resolution photo prints in any size</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2 text-primary">ID Cards</h3>
              <p className="text-gray-700">Professional employee and student ID cards</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2 text-primary">Certificates</h3>
              <p className="text-gray-700">Custom certificates and awards</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2 text-primary">Calendars</h3>
              <p className="text-gray-700">Personalized calendars and planners</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Need a Custom Solution?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Every project is unique. Contact us to discuss your specific requirements and get a personalized quote.
          </p>
          <Link
            href="/contact"
            className="bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-lg font-semibold text-lg inline-block transition-colors"
          >
            Contact Us Today
          </Link>
        </div>
      </section>
    </div>
  )
}