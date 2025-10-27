import { useState, useEffect } from 'react'

export default function Home() {
  const [currentReview, setCurrentReview] = useState(0)

  const reviews = [
    {
      text: "Canadian Mobile Welding saved us thousands in downtime. Their emergency repair was quick, professional, and held up perfectly.",
      author: "Paul D., Site Manager, Toronto Construction"
    },
    {
      text: "Jim (the owner) recently completed a very large project on our property. Throughout the process, Jim was very responsive in our communication, and provided significant and professional advice to make the final outcome as best as it could be. He always responded promptly to our text messages, and was punctual in his arrival times. He showed great expertise and craftsmanship in repairing, painting and reinstalling the metal gates at the front and back of our home as well as a window guard/grille. It was a pleasure working with Jim. We would highly recommend Mobile Welding for your future home project requiring any welding work/repairs involving any type of metal.",
      author: "Vadim D."
    },
    {
      text: "Mobile Welding helped fix a part for a boat motor. Did a great job. Quick service! Will definitely return and send others here!",
      author: "Lucas Warzy"
    },
    {
      text: "Jim was a great person to deal with, he is very knowledgeable and pays attention to detail with his work. He was able to repair the heavy machinery in our warehouse that had been rejected by other professionals when looking for service quotes. His work was impressive and he went above and beyond expectations. I highly recommend his services.",
      author: "Abir K."
    },
    {
      text: "Jim do some work for us at our BMW Dealership, very professional, repairs were done in a timely manner. Highly recommend.",
      author: "Sal"
    },
    {
      text: "A true professional with the right tools, know how and positive attitude. Plus excellent communication and customer service skills. Jim is an absolute pleasure to deal with and I would recommend him to anyone looking for exceptional service.",
      author: "Good Life"
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % reviews.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [reviews.length])

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
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
              CANADIAN MOBILE WELDING
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">
              Trusted Mobile & In-Shop Welding Experts in Toronto & GTA
            </h2>
            <p className="text-lg md:text-xl mb-2">
              Over 20 Years of Experience | Fully Insured | 300+ 5-Star Google Reviews
            </p>
            <p className="text-base md:text-lg mb-6 opacity-90">
              Fast, certified welding for residential, commercial & industrial projects. We come to you anywhere in the GTA — or bring your project to our shop.
            </p>
            <p className="text-lg md:text-xl mb-8">
              Serving the GTA with reliable In-Shop & Mobile Welding Services for Industrial, Commercial, and Residential needs.
            </p>
            <div className="mt-8">
              <a
                href="/quote"
                className="inline-block bg-brand-red hover:bg-[#cc0000] text-white px-8 py-4 rounded font-semibold text-lg transition-colors"
              >
                Get a Free Quote
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-center text-3xl md:text-4xl font-bold mb-12">
            Category of Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="bg-gray-200 rounded-lg overflow-hidden h-64 mb-4">
                <img
                  src="https://images.pexels.com/photos/1474993/pexels-photo-1474993.jpeg"
                  alt="Industrial Welding"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900">Industrial Welding</h3>
              <p className="text-gray-600 leading-relaxed">
                We provide on-site repairs, maintenance, and custom fabrication for machinery, heavy equipment, and facility infrastructure across the GTA. Minimize downtime with our rapid mobile service.
              </p>
            </div>
            <div className="text-center group">
              <div className="bg-gray-200 rounded-lg overflow-hidden h-64 mb-4">
                <img
                  src="https://images.pexels.com/photos/2760241/pexels-photo-2760241.jpeg"
                  alt="Commercial Welding"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900">Commercial Fabrication & Repair</h3>
              <p className="text-gray-600 leading-relaxed">
                Professional on-site welding for commercial properties, including structural steel, security gates, metal railings, and tenant improvements. Reliable service that meets all commercial codes.
              </p>
            </div>
            <div className="text-center group">
              <div className="bg-gray-200 rounded-lg overflow-hidden h-64 mb-4">
                <img
                  src="https://images.pexels.com/photos/8985607/pexels-photo-8985607.jpeg"
                  alt="Residential Welding"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900">Residential Welding</h3>
              <p className="text-gray-600 leading-relaxed">
                Convenient mobile welding services for your home. We handle all repairs, from damaged metal fences, patio furniture, and railings to custom home accent pieces and decorative metal fabrication.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Our Services
          </h2>
          <h3 className="text-xl md:text-2xl font-semibold text-center mb-8">
            <span className="text-[#ff0000]">Mobile & In-Shop Welding: Full-Service Metal Solutions</span>
          </h3>
          <p className="text-center text-gray-700 max-w-4xl mx-auto leading-relaxed mb-12">
            The Canadian Mobile Welding is your comprehensive partner for all heavy-duty and commercial welding needs across the GTA. With a fully mobile and equipped unit, we bring precision and reliability directly to your site. Our certified welders specialize in a wide range of materials and applications, ensuring we deliver compliant, durable results every time.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              'MIG, TIG, Stick & Arc Welding',
              'Structural Steel Installation',
              'Aluminum & Stainless Steel Welding',
              'Custom Metal Fabrication',
              'Pipe & Tube Welding',
              'Emergency Breakdown Repair',
              'Heavy Equipment Repair',
              'Metal Railing & Gate Installation',
              'Trailer & Vehicle Frame Repair'
            ].map((service, i) => (
              <div key={i} className="flex items-start">
                <span className="text-[#ff0000] mr-3 text-xl font-bold">✓</span>
                <span className="text-gray-700">{service}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Canadian Mobile Welding was created to best serve our customers. Our welders have experience in everything from new construction, to weld repair and Department Of Defense projects.
                </p>
                <p>
                  The customers trust is our biggest goal. Whether it is repairing a piece of broken equipment or installing equipment on a high rise roof, we strive for perfection in every aspect of our work.
                </p>
                <p className="text-xl font-bold text-[#ff0000]">
                  Reliability. Precision. Speed.
                </p>
                <p>
                  Our mission is to be the most trusted mobile and in-shop welding provider in the region. We forge lasting partnerships on a foundation of safety and superior workmanship. We deliver professional, precise results with rapid response times, ensuring your operations never stop moving.
                </p>
                <div className="pt-4">
                  <a
                    href="/about"
                    className="inline-block bg-brand-red hover:bg-[#cc0000] text-white px-8 py-3 rounded font-semibold transition-colors"
                  >
                    ABOUT US
                  </a>
                </div>
              </div>
            </div>
            <div className="bg-gray-200 rounded-lg overflow-hidden h-96">
              <img
                src="https://images.pexels.com/photos/1453999/pexels-photo-1453999.jpeg"
                alt="Welder at work"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-12 bg-[#1a2332] text-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8">Our Certifications</h2>
          <div className="flex flex-wrap justify-center gap-12 text-center">
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mb-4">
                <span className="text-3xl font-bold text-[#1a2332]">CWB</span>
              </div>
              <div className="font-bold text-xl">CWB Certified Welder</div>
              <div className="text-sm opacity-90">(CSA Standard W47.1)</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mb-4">
                <span className="text-3xl font-bold text-[#1a2332]">✓</span>
              </div>
              <div className="font-bold text-xl">Fully Insured</div>
              <div className="text-sm opacity-90">Complete Coverage</div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            What Our Customers Say About Us!
          </h2>
          <p className="text-center text-xl font-semibold text-[#ff0000] mb-12">
            300+ 5-Star Google Reviews
          </p>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8 min-h-[300px] flex flex-col justify-center">
              <div className="text-5xl text-[#ff0000] mb-4">"</div>
              <p className="text-lg text-gray-700 leading-relaxed mb-6 italic">
                {reviews[currentReview].text}
              </p>
              <p className="font-bold text-gray-900">
                — {reviews[currentReview].author}
              </p>
              <div className="flex justify-center mt-6 space-x-2">
                {reviews.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentReview(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentReview ? 'bg-brand-red' : 'bg-gray-300'
                    }`}
                    aria-label={`Go to review ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            Areas We Serve for Welding Services in GTA
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-bold text-xl mb-4 text-[#ff0000]">West GTA</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center">
                  <span className="text-[#ff0000] mr-2">★</span>
                  Toronto
                </li>
                <li className="flex items-center">
                  <span className="text-[#ff0000] mr-2">★</span>
                  Etobicoke
                </li>
                <li className="flex items-center">
                  <span className="text-[#ff0000] mr-2">★</span>
                  Mississauga
                </li>
                <li className="flex items-center">
                  <span className="text-[#ff0000] mr-2">★</span>
                  Brampton
                </li>
                <li className="flex items-center">
                  <span className="text-[#ff0000] mr-2">★</span>
                  Oakville
                </li>
                <li className="flex items-center">
                  <span className="text-[#ff0000] mr-2">★</span>
                  Milton
                </li>
                <li className="flex items-center">
                  <span className="text-[#ff0000] mr-2">★</span>
                  Hamilton
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-xl mb-4 text-[#ff0000]">North GTA</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center">
                  <span className="text-[#ff0000] mr-2">★</span>
                  Vaughan
                </li>
                <li className="flex items-center">
                  <span className="text-[#ff0000] mr-2">★</span>
                  Markham
                </li>
                <li className="flex items-center">
                  <span className="text-[#ff0000] mr-2">★</span>
                  Richmond Hill
                </li>
                <li className="flex items-center">
                  <span className="text-[#ff0000] mr-2">★</span>
                  Newmarket / Aurora
                </li>
                <li className="flex items-center">
                  <span className="text-[#ff0000] mr-2">★</span>
                  North York
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-xl mb-4 text-[#ff0000]">East GTA</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center">
                  <span className="text-[#ff0000] mr-2">★</span>
                  Scarborough
                </li>
                <li className="flex items-center">
                  <span className="text-[#ff0000] mr-2">★</span>
                  Pickering
                </li>
                <li className="flex items-center">
                  <span className="text-[#ff0000] mr-2">★</span>
                  Ajax
                </li>
                <li className="flex items-center">
                  <span className="text-[#ff0000] mr-2">★</span>
                  Whitby
                </li>
                <li className="flex items-center">
                  <span className="text-[#ff0000] mr-2">★</span>
                  Oshawa
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Why Choose Us?
          </h2>
          <p className="text-center text-lg text-gray-700 mb-12">
            We forge lasting results by prioritizing speed, certified quality, and flexibility.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-8 shadow-md">
              <div className="text-4xl text-[#ff0000] mb-4">⚡</div>
              <h3 className="text-xl font-bold mb-3">True Versatility: Mobile & In-Shop</h3>
              <p className="text-gray-700 leading-relaxed">
                The only GTA partner offering both rapid on-site mobile welding and complex fabrication from our fully equipped central facility.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-md">
              <div className="text-4xl text-[#ff0000] mb-4">✓</div>
              <h3 className="text-xl font-bold mb-3">Certified Industrial Specialists</h3>
              <p className="text-gray-700 leading-relaxed">
                CWB/WCB compliant welders focused exclusively on heavy-duty commercial and structural projects, guaranteeing code-compliant durability.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-md">
              <div className="text-4xl text-[#ff0000] mb-4">⏱</div>
              <h3 className="text-xl font-bold mb-3">Rapid Response for Minimal Downtime</h3>
              <p className="text-gray-700 leading-relaxed">
                We provide fast scheduling and emergency support across all major GTA hubs to keep your business operating efficiently.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Welding Projects Gallery */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Welding Projects
          </h2>

          <div className="space-y-12">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-center text-[#ff0000]">Industrial Projects</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <div className="bg-gray-200 rounded-lg overflow-hidden h-64 mb-2">
                    <img
                      src="https://images.pexels.com/photos/1474993/pexels-photo-1474993.jpeg"
                      alt="Industrial welding before"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-center text-gray-600 font-semibold">Before</p>
                </div>
                <div>
                  <div className="bg-gray-200 rounded-lg overflow-hidden h-64 mb-2">
                    <img
                      src="https://images.pexels.com/photos/2760241/pexels-photo-2760241.jpeg"
                      alt="Industrial welding after"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-center text-gray-600 font-semibold">After</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6 text-center text-[#ff0000]">Commercial Projects</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <div className="bg-gray-200 rounded-lg overflow-hidden h-64 mb-2">
                    <img
                      src="https://images.pexels.com/photos/8985607/pexels-photo-8985607.jpeg"
                      alt="Commercial welding before"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-center text-gray-600 font-semibold">Before</p>
                </div>
                <div>
                  <div className="bg-gray-200 rounded-lg overflow-hidden h-64 mb-2">
                    <img
                      src="https://images.pexels.com/photos/1453999/pexels-photo-1453999.jpeg"
                      alt="Commercial welding after"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-center text-gray-600 font-semibold">After</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6 text-center text-[#ff0000]">Residential Projects</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <div className="bg-gray-200 rounded-lg overflow-hidden h-64 mb-2">
                    <img
                      src="https://images.pexels.com/photos/2760241/pexels-photo-2760241.jpeg"
                      alt="Residential welding before"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-center text-gray-600 font-semibold">Before</p>
                </div>
                <div>
                  <div className="bg-gray-200 rounded-lg overflow-hidden h-64 mb-2">
                    <img
                      src="https://images.pexels.com/photos/1474993/pexels-photo-1474993.jpeg"
                      alt="Residential welding after"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-center text-gray-600 font-semibold">After</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#1a2332] text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Contact us today for a free quote on your welding project. Available 24/7 for emergency services across the GTA.
          </p>
          <a
            href="/quote"
            className="inline-block bg-brand-red hover:bg-[#cc0000] text-white px-10 py-4 rounded-lg font-semibold text-lg transition-colors"
          >
            Get a Free Quote
          </a>
        </div>
      </section>
    </main>
  )
}
