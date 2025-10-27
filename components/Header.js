import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-[#1a2332] text-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="text-xl md:text-2xl font-bold tracking-tight">
            PAUL'S WELDING
          </Link>
        </div>

        <nav className="hidden lg:flex items-center space-x-8 text-sm font-medium">
          <Link href="/" className="hover:text-[#ff6b35] transition-colors">Home</Link>
          <Link href="/about" className="hover:text-[#ff6b35] transition-colors">About Us</Link>
          <div className="relative group">
            <button className="hover:text-[#ff6b35] transition-colors">Services</button>
            <div className="absolute left-0 mt-2 w-56 bg-white text-gray-900 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
              <Link href="/services/industrial" className="block px-4 py-3 hover:bg-gray-100 rounded-t-lg">Industrial Welding</Link>
              <Link href="/services/commercial" className="block px-4 py-3 hover:bg-gray-100">Commercial Welding</Link>
              <Link href="/services/residential" className="block px-4 py-3 hover:bg-gray-100 rounded-b-lg">Residential Welding</Link>
            </div>
          </div>
          <Link href="/projects" className="hover:text-[#ff6b35] transition-colors">Projects</Link>
          <Link href="/blog" className="hover:text-[#ff6b35] transition-colors">Blog</Link>
          <Link href="/faqs" className="hover:text-[#ff6b35] transition-colors">FAQs</Link>
        </nav>

        <div className="flex items-center space-x-4">
          <Link
            href="/quote"
            className="bg-[#ff6b35] hover:bg-[#ff5722] text-white px-6 py-2 rounded font-semibold transition-colors"
          >
            Get a Quote
          </Link>
          <button className="lg:hidden ml-2 text-2xl" aria-label="open menu">☰</button>
        </div>
      </div>
    </header>
  )
}
