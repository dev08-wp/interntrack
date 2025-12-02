import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/">
            <div className="flex items-center cursor-pointer">
              <span className="text-2xl font-bold text-indigo-600">
                📋 InternTrack
              </span>
            </div>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-700 hover:text-indigo-600 transition">
              Features
            </a>
            <a href="#how-it-works" className="text-gray-700 hover:text-indigo-600 transition">
              How It Works
            </a>
            <a href="#pricing" className="text-gray-700 hover:text-indigo-600 transition">
              Pricing
            </a>
          </div>

          {/* Auth Buttons */}
          <div className="flex items-center space-x-4">
            <Link href="/login">
              <button className="text-gray-700 hover:text-indigo-600 transition font-medium">
                Login
              </button>
            </Link>
            <Link href="/signup">
              <button className="bg-indigo-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-indigo-700 transition">
                Sign Up Free
              </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}