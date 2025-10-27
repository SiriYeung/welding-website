export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="relative bg-[#1a2332] text-white py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <img
            src="https://images.pexels.com/photos/2760241/pexels-photo-2760241.jpeg"
            alt="Welding background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Mobile Welding<br />Services
            </h1>
            <p className="mt-6 text-lg md:text-xl leading-relaxed">
              Expert mobile welding at your location.<br />
              Servicing the Greater Toronto Area.
            </p>
            <div className="mt-8">
              <a
                href="/quote"
                className="inline-block bg-[#ff6b35] hover:bg-[#ff5722] text-white px-8 py-4 rounded font-semibold text-lg transition-colors"
              >
                Get a Free Quote
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-center text-3xl md:text-4xl font-bold mb-4">
            Paul's Custom Welding & Fabrication Services
          </h2>
        </div>
      </section>

      {/* Services Grid */}
      <section className="pb-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: '🔧',
                title: 'Need help fast after hours?',
                desc: 'Emergency welding services available 24/7 for urgent repairs.'
              },
              {
                icon: '🏭',
                title: 'Construction/Commercial/Industrial Welding Services',
                desc: 'Professional welding solutions for large-scale projects and industrial applications.'
              },
              {
                icon: '🏠',
                title: 'Call for Welding Services At Home',
                desc: 'Convenient mobile welding services that come directly to your location.'
              },
              {
                icon: '⚙️',
                title: 'Equipment Repair/Custom Fabrication',
                desc: 'Expert repair and custom metal fabrication for any project size.'
              },
              {
                icon: '🎨',
                title: 'Custom Made Fabrication',
                desc: 'Bespoke metal work crafted to your exact specifications.'
              },
              {
                icon: '✅',
                title: 'Good Quality & Manufacturing Work',
                desc: 'Premium craftsmanship backed by years of experience and expertise.'
              }
            ].map((service, i) => (
              <div key={i} className="text-center">
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-lg font-bold mb-3 text-gray-900">{service.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <a
              href="/quote"
              className="inline-block bg-[#ff6b35] hover:bg-[#ff5722] text-white px-8 py-3 rounded font-semibold transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* Certification Banner */}
      <section className="py-12 bg-[#ff6b35] text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">Fully Insured & CWB Certified Welder Near Me in GTA</h2>
            <div className="flex flex-wrap justify-center gap-8 text-sm">
              <div>
                <div className="font-bold text-lg">CWB</div>
                <div>Certified</div>
              </div>
              <div>
                <div className="font-bold text-lg">Fully</div>
                <div>Insured</div>
              </div>
              <div>
                <div className="font-bold text-lg">Licensed</div>
                <div>Professional</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8">About Us</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Paul's Mobile Welding was established to provide exceptional welding services throughout the Greater Toronto Area. Our team brings decades of combined experience in industrial, commercial, and residential welding projects.
              </p>
              <p>
                We understand that quality welding requires both technical expertise and attention to detail. That's why every project, regardless of size, receives our full commitment to excellence.
              </p>
              <p>
                Our mobile service means we come to you, saving you time and transportation costs. We arrive fully equipped to handle any welding challenge on-site.
              </p>
            </div>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                From emergency repairs to custom fabrication projects, we have the skills and equipment to deliver outstanding results. Our welders are CWB certified and maintain the highest standards of workmanship.
              </p>
              <p>
                Customer satisfaction is at the heart of everything we do. We take pride in building long-term relationships based on trust, reliability, and superior service.
              </p>
              <div className="pt-4">
                <a
                  href="/about"
                  className="inline-block bg-[#ff6b35] hover:bg-[#ff5722] text-white px-6 py-3 rounded font-semibold transition-colors"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Passion Section */}
      <section className="py-16 bg-[#1a2332] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img
            src="https://images.pexels.com/photos/1474993/pexels-photo-1474993.jpeg"
            alt="Welding sparks"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Top Quality Welding's Our Passion.</h2>
          <p className="max-w-3xl mx-auto text-lg leading-relaxed mb-8">
            Excellence in every weld is not just our goal — it's our standard. We combine years of expertise with state-of-the-art equipment to deliver welding services that exceed expectations.
          </p>
          <ul className="max-w-2xl mx-auto text-left space-y-3 mb-8">
            <li className="flex items-start">
              <span className="text-[#ff6b35] mr-3">✓</span>
              <span>Certified welders with extensive training and experience</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#ff6b35] mr-3">✓</span>
              <span>Modern equipment for precise and efficient welding</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#ff6b35] mr-3">✓</span>
              <span>Commitment to safety and quality on every project</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#ff6b35] mr-3">✓</span>
              <span>Fast response times for emergency services</span>
            </li>
          </ul>
          <a
            href="/quote"
            className="inline-block bg-[#ff6b35] hover:bg-[#ff5722] text-white px-8 py-4 rounded font-semibold text-lg transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* Trusted Service */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                Your Trusted Mobile<br />Welding Service in<br />GTA!
              </h2>
              <div className="space-y-4 text-gray-700">
                <p className="leading-relaxed">
                  When you need reliable welding services, we're here to help. Our mobile welding team brings professional expertise directly to your location, whether it's your home, business, or job site.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="text-[#ff6b35] mr-2">✓</span>
                    <span>24 Hour Mobile Service</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-[#ff6b35] mr-2">✓</span>
                    <span>Professional Support</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="bg-gray-200 rounded-lg overflow-hidden h-80">
              <img
                src="https://images.pexels.com/photos/8985607/pexels-photo-8985607.jpeg"
                alt="Welder at work"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Areas We Serve for Welding Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-bold text-xl mb-4 text-[#ff6b35]">High Demand</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Toronto</li>
                <li>• Mississauga</li>
                <li>• Brampton</li>
                <li>• Markham</li>
                <li>• Vaughan</li>
                <li>• Hamilton</li>
                <li>• Oakville</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-xl mb-4 text-[#ff6b35]">Consistent Demand</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Richmond Hill</li>
                <li>• Burlington</li>
                <li>• Oshawa</li>
                <li>• Barrie</li>
                <li>• Guelph</li>
                <li>• Cambridge</li>
                <li>• Whitby</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-xl mb-4 text-[#ff6b35]">Emerging Demand</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Ajax</li>
                <li>• Pickering</li>
                <li>• Newmarket</li>
                <li>• Aurora</li>
                <li>• Milton</li>
                <li>• Kitchener</li>
                <li>• Waterloo</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Gallery */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-4">Showcasing Our Welding Projects</h2>
          <p className="text-center text-gray-600 mb-12">Across the GTA</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              'https://images.pexels.com/photos/2760241/pexels-photo-2760241.jpeg',
              'https://images.pexels.com/photos/1474993/pexels-photo-1474993.jpeg',
              'https://images.pexels.com/photos/8985607/pexels-photo-8985607.jpeg',
              'https://images.pexels.com/photos/1453999/pexels-photo-1453999.jpeg'
            ].map((src, i) => (
              <div key={i} className="bg-gray-200 rounded-lg overflow-hidden h-64">
                <img
                  src={src}
                  alt={`Welding project ${i + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <a
              href="/projects"
              className="inline-block bg-[#ff6b35] hover:bg-[#ff5722] text-white px-8 py-3 rounded font-semibold transition-colors"
            >
              View All
            </a>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Welding Blogs</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                img: 'https://images.pexels.com/photos/1474993/pexels-photo-1474993.jpeg',
                title: 'Understanding Different Welding Techniques for Home Projects',
                excerpt: 'Learn about MIG, TIG, and stick welding methods and when to use each technique for your residential welding needs.'
              },
              {
                img: 'https://images.pexels.com/photos/2760241/pexels-photo-2760241.jpeg',
                title: 'Complete Guide to Mobile Welding Services in the GTA',
                excerpt: 'Discover the benefits of mobile welding and how it can save you time and money on your next project.'
              },
              {
                img: 'https://images.pexels.com/photos/8985607/pexels-photo-8985607.jpeg',
                title: 'Industrial Welding: Meeting Commercial Standards and Safety',
                excerpt: 'Essential information about commercial welding requirements, certifications, and safety protocols.'
              }
            ].map((post, i) => (
              <article key={i} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <div className="h-48 bg-gray-200">
                  <img
                    src={post.img}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-lg mb-3">{post.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{post.excerpt}</p>
                  <a href="#" className="text-[#ff6b35] font-semibold hover:underline">Read More →</a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#1a2332] text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Welding Done Right - Quality<br />Work by Expert Welders
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Contact us today for a free quote on your welding project.
            Available 24/7 for emergency services.
          </p>
          <a
            href="/quote"
            className="inline-block bg-[#ff6b35] hover:bg-[#ff5722] text-white px-10 py-4 rounded-lg font-semibold text-lg transition-colors"
          >
            Get a Quote
          </a>
        </div>
      </section>

    </main>
  )
}
