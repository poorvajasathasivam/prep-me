import Link from 'next/link'
import { Facebook, Twitter, LinkedinIcon as LinkedIn, Instagram } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <Link href="/" className="text-2xl font-bold text-blue-600">PrepMe</Link>
            <p className="mt-2 text-gray-600">AI-powered interview preparation.</p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold text-gray-800 mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-600 hover:text-blue-600 transition duration-300">About</Link></li>
              <li><Link href="/privacy" className="text-gray-600 hover:text-blue-600 transition duration-300">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-gray-600 hover:text-blue-600 transition duration-300">Terms of Service</Link></li>
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h4 className="text-lg font-semibold text-gray-800 mb-4">Connect With Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-600 transition duration-300">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-600 transition duration-300">
                <Twitter size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-600 transition duration-300">
                <LinkedIn size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-600 transition duration-300">
                <Instagram size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p className="text-gray-600">&copy; 2024 PrepMe. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

