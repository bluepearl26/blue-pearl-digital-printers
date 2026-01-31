'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="relative w-10 h-10">
                <Image src="/logo.png" alt="Blue Pearl" fill className="object-contain" />
              </div>
              <span className="font-bold text-lg">Blue Pearl</span>
            </div>
            <p className="text-gray-300 mb-4">
              Professional digital printing solutions for businesses and individuals.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-accent transition-colors">
                <Facebook size={24} />
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <Instagram size={24} />
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <Linkedin size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-accent transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-accent transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-accent transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-accent transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Our Services</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Business Cards</li>
              <li>Brochures & Flyers</li>
              <li>Banners & Flex</li>
              <li>Posters & Signage</li>
              <li>Envelopes</li>
              <li>Prescription Pads</li>
              <li>Custom File Covers</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Phone size={20} className="mt-1 flex-shrink-0" />
                <div className="flex flex-col">
                  <a href="tel:+919980166221" className="text-gray-300 hover:text-accent transition-colors">
                    +91 9980166221
                  </a>
                  <a href="tel:+918553666002" className="text-gray-300 hover:text-accent transition-colors">
                    +91 8553666002
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Mail size={20} className="mt-1 flex-shrink-0" />
                <a
                  href="mailto:bluepearlprints@gmail.com"
                  className="text-gray-300 hover:text-accent transition-colors"
                >
                  bluepearlprints@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={20} className="mt-1 flex-shrink-0" />
                <span className="text-gray-300">
                  Bengaluru, Karnataka
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Blue Pearl Digital Printers. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}