'use client'

import Image from 'next/image'
import { Award, Users, Target, Heart } from 'lucide-react'

export default function About() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-primary text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">About Blue Pearl Digital Printers</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Your trusted partner for professional digital printing solutions
          </p>
        </div>
      </section>

      {/* Business Introduction */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-primary">Who We Are</h2>
              <p className="text-lg text-gray-700 mb-4">
                Blue Pearl Digital Printers is a leading local printing company dedicated to delivering
                exceptional quality and service to businesses and individuals in our community.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                With years of experience in the printing industry, we combine traditional craftsmanship
                with cutting-edge digital technology to produce stunning results that exceed expectations.
              </p>
              <p className="text-lg text-gray-700">
                From small business cards to large format banners, we handle every project with the same
                level of care and attention to detail, ensuring your vision comes to life perfectly.
              </p>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/shop.jpg"
                alt="Blue Pearl Digital Printers Shop"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission and Values */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-primary">Our Mission & Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-primary rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Award className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-primary">Quality Excellence</h3>
              <p className="text-gray-700">
                We never compromise on quality. Every print must meet our high standards before it reaches you.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-primary rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-primary">Customer First</h3>
              <p className="text-gray-700">
                Your satisfaction is our priority. We work closely with you to bring your ideas to life.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-primary rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Target className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-primary">Precision & Detail</h3>
              <p className="text-gray-700">
                Attention to every detail ensures your prints look professional and make an impact.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-primary rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Heart className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-primary">Community Commitment</h3>
              <p className="text-gray-700">
                Proud to serve our local community and support businesses in achieving their goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 text-primary">Experience You Can Trust</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
            With years of industry experience, state-of-the-art equipment, and a passionate team,
            Blue Pearl Digital Printers has become the go-to printing partner for businesses across the region.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div>
              <div className="text-5xl font-bold text-accent mb-2">10+</div>
              <div className="text-xl text-gray-700">Years Experience</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-accent mb-2">5000+</div>
              <div className="text-xl text-gray-700">Happy Clients</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-accent mb-2">24/7</div>
              <div className="text-xl text-gray-700">Customer Support</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}