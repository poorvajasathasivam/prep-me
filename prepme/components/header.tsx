'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-blue-600">PrepMe</Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <Link href="/" className="text-gray-600 hover:text-blue-600 transition duration-300">Home</Link>
          <Link href="/dashboard" className="text-gray-600 hover:text-blue-600 transition duration-300">Dashboard</Link>
          <Link href="/features" className="text-gray-600 hover:text-blue-600 transition duration-300">Features</Link>
          <Link href="/pricing" className="text-gray-600 hover:text-blue-600 transition duration-300">Pricing</Link>
          <Link href="/contact" className="text-gray-600 hover:text-blue-600 transition duration-300">Contact</Link>
          <Link href="/signin" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105">
            Sign In
          </Link>
        </div>

        {/* Mobile Navigation Toggle */}
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white py-2">
          <Link href="/" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">Home</Link>
          <Link href="/dashboard" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">Dashboard</Link>
          <Link href="/features" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">Features</Link>
          <Link href="/pricing" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">Pricing</Link>
          <Link href="/contact" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">Contact</Link>
          <Link href="/signin" className="block px-4 py-2 text-blue-600 font-bold hover:bg-gray-100">Sign In</Link>
        </div>
      )}
    </header>
  )
}

