import Link from 'next/link'
import { useState } from 'react'
import type { ReactElement } from 'react'

export default function Header(): ReactElement {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)

  return (
    <header className="bg-brand-blue text-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="text-xl md:text-2xl font-bold tracking-tight">
            <img src='/images/logo_name.png' alt='Canadian mobile welding' className='w-50 h-50' />
          </Link>
        </div>

        <nav className="hidden lg:flex items-center space-x-8 text-sm font-medium">
          <Link href="/" className="hover:text-[#ff0000] transition-colors">Home</Link>
          <Link href="/about" className="hover:text-[#ff0000] transition-colors">About Us</Link>
          <div className="relative group">
            <button className="hover:text-[#ff0000] transition-colors">Services</button>
            <div className="absolute left-0 mt-2 w-56 bg-white text-gray-900 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
              <Link href="/services/industrial" className="block px-4 py-3 hover:bg-gray-100 rounded-t-lg">Industrial Welding</Link>
              <Link href="/services/commercial" className="block px-4 py-3 hover:bg-gray-100">Commercial Welding</Link>
              <Link href="/services/residential" className="block px-4 py-3 hover:bg-gray-100 rounded-b-lg">Residential Welding</Link>
            </div>
          </div>
          <Link href="/projects" className="hover:text-[#ff0000] transition-colors">Projects</Link>
          <Link href="/blog" className="hover:text-[#ff0000] transition-colors">Blog</Link>
          <Link href="/faqs" className="hover:text-[#ff0000] transition-colors">FAQs</Link>
        </nav>

        <div className="flex items-center space-x-4">
          <Link
            href="/quote"
            className="hidden md:inline-block bg-brand-red hover:bg-[#cc0000] text-white px-6 py-2 rounded font-semibold transition-colors"
          >
            Get a Quote
          </Link>
          <button
            className="lg:hidden ml-2 text-2xl"
            aria-label="Toggle menu"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#1a2332] border-t border-gray-700">
          <nav className="px-6 py-4 space-y-3">
            <Link
              href="/"
              className="block py-2 hover:text-[#ff0000] transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="block py-2 hover:text-[#ff0000] transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              About Us
            </Link>
            <div>
              <button
                className="w-full text-left py-2 hover:text-[#ff0000] transition-colors flex items-center justify-between"
                onClick={() => setServicesOpen(!servicesOpen)}
              >
                Services
                <span className="text-sm">{servicesOpen ? '▲' : '▼'}</span>
              </button>
              {servicesOpen && (
                <div className="pl-4 space-y-2 mt-2">
                  <Link
                    href="/services/industrial"
                    className="block py-2 hover:text-[#ff0000] transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Industrial Welding
                  </Link>
                  <Link
                    href="/services/commercial"
                    className="block py-2 hover:text-[#ff0000] transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Commercial Welding
                  </Link>
                  <Link
                    href="/services/residential"
                    className="block py-2 hover:text-[#ff0000] transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Residential Welding
                  </Link>
                </div>
              )}
            </div>
            <Link
              href="/projects"
              className="block py-2 hover:text-[#ff0000] transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Projects
            </Link>
            <Link
              href="/blog"
              className="block py-2 hover:text-[#ff0000] transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Blog
            </Link>
            <Link
              href="/faqs"
              className="block py-2 hover:text-[#ff0000] transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              FAQs
            </Link>
            <Link
              href="/quote"
              className="block mt-4 bg-brand-red hover:bg-[#cc0000] text-white px-6 py-3 rounded font-semibold transition-colors text-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              Get a Quote
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
