import Navbar from './Navbar'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Add Navbar */}
      <Navbar />
      
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center max-w-4xl mx-auto">
          {/* Logo/Title */}
          <h1 className="text-6xl font-bold text-gray-900 mb-6">
            📋 InternTrack
          </h1>
          
          {/* Tagline */}
          <p className="text-2xl text-gray-700 mb-4">
            Never lose track of your internship applications again
          </p>
          
          <p className="text-lg text-gray-600 mb-12">
            The simplest way for students to organize, track, and manage all their internship applications in one place.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex gap-4 justify-center mb-16">
            <Link href="/signup">
              <button className="bg-indigo-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-indigo-700 transition shadow-lg">
                Get Started Free
              </button>
            </Link>
            <a href="#how-it-works">
              <button className="bg-white text-indigo-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-50 transition border-2 border-indigo-600">
                See How It Works
              </button>
            </a>
          </div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-8 mt-16" id="features">
            {/* Feature 1 */}
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Track Everything
              </h3>
              <p className="text-gray-600">
                Keep all your applications organized in one dashboard. Never miss a deadline.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                See Your Progress
              </h3>
              <p className="text-gray-600">
                Visual analytics showing your application status, success rate, and more.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition">
              <div className="text-4xl mb-4">🔔</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Smart Reminders
              </h3>
              <p className="text-gray-600">
                Get notified to follow up on applications. Never let an opportunity slip away.
              </p>
            </div>
          </div>

          {/* How It Works Section */}
          <div className="mt-24" id="how-it-works">
            <h2 className="text-4xl font-bold text-gray-900 mb-12">
              How It Works
            </h2>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-indigo-600">
                  1
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Sign Up</h4>
                <p className="text-gray-600 text-sm">Create your free account in 30 seconds</p>
              </div>
              <div className="text-center">
                <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-indigo-600">
                  2
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Add Applications</h4>
                <p className="text-gray-600 text-sm">Enter details of companies you've applied to</p>
              </div>
              <div className="text-center">
                <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-indigo-600">
                  3
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Track Progress</h4>
                <p className="text-gray-600 text-sm">Update status as you move through stages</p>
              </div>
              <div className="text-center">
                <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-indigo-600">
                  4
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Get Hired!</h4>
                <p className="text-gray-600 text-sm">Stay organized and land your dream internship</p>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="mt-16 bg-white rounded-xl shadow-lg p-8">
            <p className="text-gray-600 mb-6 text-lg">Trusted by students across India</p>
            <div className="grid grid-cols-3 gap-8">
              <div>
                <div className="text-4xl font-bold text-indigo-600">500+</div>
                <div className="text-gray-600 mt-2">Active Users</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-indigo-600">2,000+</div>
                <div className="text-gray-600 mt-2">Applications Tracked</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-indigo-600">50+</div>
                <div className="text-gray-600 mt-2">Colleges</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white mt-16 py-8 text-center text-gray-600 border-t">
        <p>Built with ❤️ for students by students</p>
        <p className="text-sm mt-2">© 2024 InternTrack. All rights reserved.</p>
      </footer>
    </div>
  )
}