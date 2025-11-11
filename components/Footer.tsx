import Link from 'next/link'
import type { ReactElement } from 'react'

export default function Footer(): ReactElement {
  return (
    <footer className="bg-[#1a2332] text-white pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-8">
          <div>
            <div className="mb-4">
              <Link href="/" className="text-2xl font-bold tracking-tight">
                CANADIAN MOBILE WELDING
              </Link>
            </div>
            <p className="text-gray-300 leading-relaxed max-w-md">
              We provide fast, reliable mobile and in-shop welding for residential, commercial, and industrial clients across the GTA. Certified welders. Quality guaranteed.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <nav className="space-y-3">
              <Link href="/about" className="block hover:text-[#ff0000] transition-colors">
                About Us
              </Link>
              <Link href="/services/industrial" className="block hover:text-[#ff0000] transition-colors">
                Industrial Welding Service
              </Link>
              <Link href="/services/commercial" className="block hover:text-[#ff0000] transition-colors">
                Commercial Welding Service
              </Link>
              <Link href="/services/residential" className="block hover:text-[#ff0000] transition-colors">
                Residential Welding Service
              </Link>
              <Link href="/projects" className="block hover:text-[#ff0000] transition-colors">
                Project Gallery
              </Link>
              <Link href="/faqs" className="block hover:text-[#ff0000] transition-colors">
                FAQs
              </Link>
              <Link href="/blog" className="block hover:text-[#ff0000] transition-colors">
                Blogs
              </Link>
              <Link href="/contact" className="block hover:text-[#ff0000] transition-colors">
                Contact Us
              </Link>
            </nav>

            <div className="mt-6">
              <a
                href="tel:416-444-9999"
                className="block text-2xl font-bold text-[#ff0000] hover:text-[#cc0000] transition-colors mb-4"
              >
                416-444-9999
              </a>
              <Link
                href="/quote"
                className="inline-block bg-brand-red hover:bg-[#cc0000] text-white px-8 py-3 rounded font-semibold transition-colors"
              >
                REQUEST A QUOTE
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-6 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Canadian Mobile Welding. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
