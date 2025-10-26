import { useEffect, useState } from 'react'

const testimonials = [
  {
    text: 'Canadian Mobile Welding saved us thousands in downtime. Their emergency repair was quick, professional, and held up perfectly.',
    author: 'Paul D., Site Manager, Toronto Construction'
  },
  {
    text: 'Jim recently completed a very large project on our property. He was responsive, punctual and showed great expertise. A pleasure to work with.',
    author: 'Vadim D.'
  },
  {
    text: 'Mobile Welding helped fix a part for a boat motor. Did a great job. Quick service! Will definitely return.',
    author: 'Lucas Warzy'
  }
]

export default function Home() {
  const [idx, setIdx] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % testimonials.length), 5000)
    return () => clearInterval(t)
  }, [])

  return (
    <main className="min-h-screen font-primary">
      {/* Hero */}
      <section className="bg-brand-blue text-white py-16">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold">CANADIAN MOBILE WELDING</h1>
            <p className="mt-4 text-lg md:text-xl">Trusted Mobile &amp; In-Shop Welding Experts in Toronto &amp; GTA</p>
            <p className="mt-2 text-sm opacity-90">Over 20 Years of Experience | Fully Insured | 300+ 5-Star Google Reviews</p>
            <p className="mt-4 max-w-xl">Fast, certified welding for residential, commercial &amp; industrial projects. We come to you anywhere in the GTA — or bring your project to our shop.</p>
            <div className="mt-6 flex items-center gap-4">
              <a href="/quote" className="inline-block bg-brand-red text-white px-6 py-3 rounded-lg font-semibold">Get a Free Quote</a>
              <a href="tel:4164449999" className="inline-block text-white underline">Call: 416-444-9999</a>
            </div>
          </div>

          <div className="order-first md:order-last flex justify-center">
            <div className="w-full max-w-sm h-56 bg-gray-100 rounded overflow-hidden flex items-center justify-center text-brand-blue font-bold">Image / Truck</div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold">Serving the GTA with reliable In-Shop &amp; Mobile Welding Services</h2>
          <p className="mt-3">for Industrial, Commercial, and Residential needs.</p>
        </div>
      </section>

      {/* Services */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-xl font-bold text-center">Category of services</h3>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            <article className="bg-white p-6 rounded shadow">
              <h4 className="font-semibold text-lg">Industrial Welding</h4>
              <p className="mt-2 text-sm">We provide on-site repairs, maintenance, and custom fabrication for machinery, heavy equipment, and facility infrastructure across the GTA. Minimize downtime with our rapid mobile service.</p>
              <div className="mt-4 h-40 bg-gray-100 rounded flex items-center justify-center text-sm text-gray-500">Image placeholder</div>
            </article>

            <article className="bg-white p-6 rounded shadow">
              <h4 className="font-semibold text-lg">Commercial Fabrication &amp; Repair</h4>
              <p className="mt-2 text-sm">Professional on-site welding for commercial properties, including structural steel, security gates, metal railings, and tenant improvements. Reliable service that meets all commercial codes.</p>
              <div className="mt-4 h-40 bg-gray-100 rounded flex items-center justify-center text-sm text-gray-500">Image placeholder</div>
            </article>

            <article className="bg-white p-6 rounded shadow">
              <h4 className="font-semibold text-lg">Residential Welding</h4>
              <p className="mt-2 text-sm">Convenient mobile welding services for your home. We handle all repairs, from damaged metal fences, patio furniture, and railings to custom home accent pieces and decorative metal fabrication.</p>
              <div className="mt-4 h-40 bg-gray-100 rounded flex items-center justify-center text-sm text-gray-500">Image placeholder</div>
            </article>
          </div>
        </div>
      </section>

      {/* Our Services (red) */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-xl font-bold">Our Services: <span className="text-brand-red">Mobile &amp; In-Shop Welding: Full-Service Metal Solutions</span></h3>
          <p className="mt-4">The Canadian Mobile Welding is your comprehensive partner for all heavy-duty and commercial welding needs across the GTA. With a fully mobile and equipped unit, we bring precision and reliability directly to your site. Our certified welders specialize in a wide range of materials and applications, ensuring we deliver compliant, durable results every time.</p>
        </div>
      </section>

      {/* Mission & Certifications */}
      <section className="bg-gray-100 py-12">
        <div className="max-w-6xl mx-auto px-6 md:flex md:gap-8">
          <div className="md:flex-1">
            <h3 className="text-xl font-bold">Our Mission</h3>
            <p className="mt-3">Canadian Mobile Welding was created to best serve our customers. Our welders have experience in everything from new construction, to weld repair and Department Of Defense projects.</p>
            <p className="mt-3">The customers trust is our biggest goal. Whether it is repairing a piece of broken equipment or installing equipment on a high rise roof, we strive for perfection in every aspect of our work.</p>
            <p className="mt-3 text-brand-red font-semibold">Reliability. Precision. Speed.</p>
            <p className="mt-4">Our mission is to be the most trusted mobile and in-shop welding provider in the region. We forge lasting partnerships on a foundation of safety and superior workmanship. We deliver professional, precise results with rapid response times, ensuring your operations never stop moving.</p>
          </div>

          <aside className="md:w-64 mt-6 md:mt-0">
            <h4 className="font-semibold">Our Certifications</h4>
            <ul className="mt-2 text-sm">
              <li>CWB Certified Welder (CSA Standard W47.1)</li>
              <li>Fully Insured</li>
            </ul>
            <div className="mt-6">
              <h4 className="font-semibold">What Our Customers Say</h4>
              <div className="mt-3 p-4 bg-white rounded shadow">
                <p className="text-sm">"{testimonials[idx].text}"</p>
                <p className="mt-2 text-xs text-gray-600">— {testimonials[idx].author}</p>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-xl font-bold">Areas We Serve in the GTA</h3>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div>
              <h4 className="font-semibold">West GTA</h4>
              <ul className="mt-2 space-y-1">
                <li>★ Toronto</li>
                <li>★ Etobicoke</li>
                <li>★ Mississauga</li>
                <li>★ Brampton</li>
                <li>★ Oakville</li>
                <li>★ Milton</li>
                <li>★ Hamilton</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold">North GTA</h4>
              <ul className="mt-2 space-y-1">
                <li>★ Vaughan</li>
                <li>★ Markham</li>
                <li>★ Richmond Hill</li>
                <li>★ Newmarket / Aurora</li>
                <li>★ North York</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold">East GTA</h4>
              <ul className="mt-2 space-y-1">
                <li>★ Scarborough</li>
                <li>★ Pickering</li>
                <li>★ Ajax</li>
                <li>★ Whitby</li>
                <li>★ Oshawa</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials slider */}
      <section className="bg-white py-12">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h3 className="text-xl font-bold">What Our Customers Say</h3>
          <div className="mt-6">
            <div className="max-w-3xl mx-auto p-6 bg-gray-50 rounded shadow">
              <p className="text-sm">"{testimonials[idx].text}"</p>
              <p className="mt-2 text-xs text-gray-600">— {testimonials[idx].author}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects gallery */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-xl font-bold">Welding Projects</h3>
          <p className="mt-2">Display industrial, commercial and residential project pictures (before & after). Total 6 images.</p>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="h-40 bg-gray-100 rounded flex items-center justify-center">Project image</div>
            <div className="h-40 bg-gray-100 rounded flex items-center justify-center">Project image</div>
            <div className="h-40 bg-gray-100 rounded flex items-center justify-center">Project image</div>
            <div className="h-40 bg-gray-100 rounded flex items-center justify-center">Project image</div>
            <div className="h-40 bg-gray-100 rounded flex items-center justify-center">Project image</div>
            <div className="h-40 bg-gray-100 rounded flex items-center justify-center">Project image</div>
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="bg-brand-blue text-white py-10">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h3 className="text-xl font-bold">Get a Free Quote</h3>
          <p className="mt-2">Fast response across GTA — Call now: <a href="tel:4164449999" className="font-semibold">416-444-9999</a></p>
          <div className="mt-4">
            <a href="/quote" className="inline-block bg-brand-red text-white px-6 py-3 rounded-lg font-semibold">Get a Free Quote</a>
          </div>
        </div>
      </section>

    </main>
  )
}
