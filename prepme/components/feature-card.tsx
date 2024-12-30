import Link from 'next/link'
import { VideoIcon, FileTextIcon, UserIcon, TrendingUpIcon } from 'lucide-react'

interface FeatureCardProps {
  title: string
  description: string
  icon: string
  learnMoreLink: string
}

const iconComponents = {
  VideoIcon,
  FileTextIcon,
  UserIcon,
  TrendingUpIcon
}

export default function FeatureCard({ title, description, icon, learnMoreLink }: FeatureCardProps) {
  const IconComponent = iconComponents[icon as keyof typeof iconComponents]

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
      <div className="flex items-center mb-4">
        {IconComponent && <IconComponent className="w-8 h-8 mr-3 text-blue-600" />}
        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
      </div>
      <p className="text-gray-600 mb-4">{description}</p>
      <Link href={learnMoreLink} className="text-blue-600 hover:text-blue-800 font-semibold">
        Learn More &rarr;
      </Link>
    </div>
  )
}

