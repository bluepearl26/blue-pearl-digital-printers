'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Phone, Mail, Clock, Award, Zap, DollarSign } from 'lucide-react'

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero.jpg"
            alt="Blue Pearl Digital Printers"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Professional Digital Printing Solutions
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            High-quality prints, fast turnaround, trusted by local businesses
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+919980166221"
              className="bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center justify-center gap-2"
            >
              <Phone size={20} />
              Call Now
            </a>
            <Link
              href="/contact"
              className="bg-white hover:bg-gray-100 text-primary px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              Request a Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4 text-primary">Our Services</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Professional printing solutions for all your business needs
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-secondary rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="relative h-64">
                <Image
                  src="/service-business-cards.jpg"
                  alt="Business Cards"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-3 text-primary">Business Cards</h3>
                <p className="text-gray-700 mb-4">
                  Premium quality business cards that make a lasting impression
                </p>
                <Link
                  href="/services"
                  className="text-accent font-semibold hover:underline"
                >
                  Learn More →
                </Link>
              </div>
            </div>

            <div className="bg-secondary rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="relative h-64">
                <Image
                  src="/service-banners.jpg"
                  alt="Banners"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-3 text-primary">Banners & Flex</h3>
                <p className="text-gray-700 mb-4">
                  Eye-catching banners for events, promotions, and branding
                </p>
                <Link
                  href="/services"
                  className="text-accent font-semibold hover:underline"
                >
                  Learn More →
                </Link>
              </div>
            </div>

            <div className="bg-secondary rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="relative h-64">
                <Image
                  src="/service-posters.jpg"
                  alt="Posters"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-3 text-primary">Posters & Signage</h3>
                <p className="text-gray-700 mb-4">
                  Vibrant posters and signage that grab attention
                </p>
                <Link
                  href="/services"
                  className="text-accent font-semibold hover:underline"
                >
                  Learn More →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Why Choose Blue Pearl?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-accent rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <Award size={40} />
              </div>
              <h3 className="text-2xl font-semibold mb-3">Premium Quality</h3>
              <p className="text-gray-200">
                We use state-of-the-art equipment and premium materials to ensure the best results
              </p>
            </div>

            <div className="text-center">
              <div className="bg-accent rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <Zap size={40} />
              </div>
              <h3 className="text-2xl font-semibold mb-3">Fast Turnaround</h3>
              <p className="text-gray-200">
                Quick delivery without compromising quality. Most orders ready within 24-48 hours
              </p>
            </div>

            <div className="text-center">
              <div className="bg-accent rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <DollarSign size={40} />
              </div>
              <h3 className="text-2xl font-semibold mb-3">Affordable Pricing</h3>
              <p className="text-gray-200">
                Competitive rates with no hidden costs. Quality printing that fits your budget
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact CTA */}
      <section className="py-12 bg-accent">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 text-white">Ready to Start Your Project?</h2>
          <p className="text-xl mb-6 text-white/90">Contact us today for a free quote</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+919980166221"
              className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center justify-center gap-2"
            >
              <Phone size={20} />
              Call Now
            </a>
            <Link
              href="/contact"
              className="bg-white hover:bg-gray-100 text-primary px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}