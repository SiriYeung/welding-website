import Head from 'next/head'
import Link from 'next/link'

export default function Custom404() {
  return (
    <>
      <Head>
        <title>404 — Page not found | Canadian Mobile Welding</title>
        <meta name="robots" content="noindex" />
      </Head>
      <main className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white via-gray-50 to-gray-100 py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="inline-flex items-center justify-center w-40 h-40 rounded-full bg-[#1a2332] text-white mb-8 shadow-lg">
            <span className="text-4xl font-bold">404</span>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Page not found</h1>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            Oops — the page you're looking for doesn't exist or was moved. Let's get you back on track.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/" className='inline-block bg-brand-red hover:bg-[#cc0000] text-white px-6 py-3 rounded font-semibold'>
              Go to Home
            </Link>

            <Link href="/contact" className='inline-block border border-gray-300 hover:border-gray-400 text-gray-800 px-6 py-3 rounded'>
              Contact Us
            </Link>
          </div>

          <div className="mt-10 text-sm text-gray-500">
            Tip: check the URL for typos or use the navigation at the top to find what you need.
          </div>
        </div>
      </main>
    </>
  )
}
