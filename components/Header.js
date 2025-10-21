import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-brand-blue">
      <div className="max-w-6xl mx-auto flex items-center justify-between p-4">
        <div className="flex items-center space-x-4">
          <div className="text-xl font-bold">Mobile Welding Service</div>
          <nav className="hidden md:flex space-x-4 font-primary">
            <Link href="/" className="hover:underline">HOME</Link>
            <Link href="/about" className="hover:underline">ABOUT US</Link>
            <div className="relative group">
              <button className="hover:underline">SERVICES</button>
              <div className="absolute left-0 mt-2 w-48 bg-white text-black rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none group-hover:pointer-events-auto z-10">
                <Link href="/services/industrial" className="block px-4 py-2 hover:bg-gray-100">Industrial Welding</Link>
                <Link href="/services/commercial" className="block px-4 py-2 hover:bg-gray-100">Commercial Welding</Link>
                <Link href="/services/residential" className="block px-4 py-2 hover:bg-gray-100">Residential Welding</Link>
              </div>
            </div>
            <Link href="/projects" className="hover:underline">PROJECTS</Link>
            <Link href="/faqs" className="hover:underline">FAQS</Link>
          </nav>
        </div>

        <div className="flex items-center space-x-4">
          <div className="hidden sm:block text-right">
            <div className="text-sm">Cell: <a href="tel:4164449999" className="font-semibold">416-444-9999</a></div>
            <div className="text-xs">Call Now – Fast Response Across GTA</div>
          </div>
          <Link href="/quote" className="bg-brand-red text-white px-4 py-2 rounded font-semibold">FREE QUOTE</Link>
        </div>
      </div>
    </header>
  )
}
