import Image from 'next/image'
import Link from 'next/link'
import FeatureCard from '@/components/feature-card'
import TestimonialCard from '@/components/testimonial-card'

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      {/* Hero Section */}
      <section className="py-20 text-center">
        <h1 className="text-5xl font-bold mb-6 text-blue-600">Ace Your Next Interview with AI-Powered Preparation</h1>
        <p className="text-xl mb-10 text-gray-600 max-w-2xl mx-auto">Personalized practice, real-time feedback, and industry insights – all in one place.</p>
        <div className="flex justify-center space-x-4">
          <Link href="/signup" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300 ease-in-out transform hover:scale-105">
            Get Started
          </Link>
          <Link href="/features" className="bg-white hover:bg-gray-100 text-blue-600 font-bold py-3 px-8 rounded-full text-lg transition duration-300 ease-in-out transform hover:scale-105 border-2 border-blue-600">
            Explore Features
          </Link>
        </div>
        <div className="mt-12">
          <Image src="/images/cover.jpg" alt="AI Interview Preparation" width={1200} height={300} className="mx-auto" />
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-20">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Key Features</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <FeatureCard 
            title="Mock Interviews"
            description="Practice with AI-powered interviewers tailored to your industry and role."
            icon="VideoIcon"
            learnMoreLink="/features/mock-interviews"
          />
          <FeatureCard 
            title="Resume Analyzer"
            description="Get AI-powered insights and improvements for your resume."
            icon="FileTextIcon"
            learnMoreLink="/features/resume-analyzer"
          />
          <FeatureCard 
            title="Personalized Prep"
            description="Receive custom question sets based on your experience and target role."
            icon="UserIcon"
            learnMoreLink="/features/personalized-prep"
          />
          <FeatureCard 
            title="Industry Insights"
            description="Stay updated with the latest trends and tips in your field."
            icon="TrendingUpIcon"
            learnMoreLink="/features/industry-insights"
          />
        </div>
      </section>

      {/* User Testimonials */}
      <section className="py-20 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">What Our Users Say</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <TestimonialCard 
            quote="AI Interview Prep helped me land my dream job at a top tech company. The personalized practice was invaluable!"
            name="Sarah J."
            role="Software Engineer"
            imageSrc="/images/testimonial-1.jpg"
          />
          <TestimonialCard 
            quote="The mock interviews felt so real. I was well-prepared for my actual interviews thanks to this platform."
            name="Michael T."
            role="Product Manager"
            imageSrc="/images/testimonial-2.jpg"
          />
          <TestimonialCard 
            quote="The resume analyzer gave me insights I never would have thought of. My interview callbacks increased significantly!"
            name="Emily R."
            role="Marketing Specialist"
            imageSrc="/images/testimonial-3.jpg"
          />
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-20 text-center">
        <h2 className="text-4xl font-bold mb-6 text-blue-600">Ready to Get Started?</h2>
        <p className="text-xl mb-8 text-gray-600 max-w-2xl mx-auto">Join thousands of successful job seekers who have improved their interview skills with AI Interview Prep.</p>
        <Link href="/signup" className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300 ease-in-out transform hover:scale-105">
          Sign Up for Free
        </Link>
      </section>
    </div>
  )
}




