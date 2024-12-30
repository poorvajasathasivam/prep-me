import Image from 'next/image'

interface TestimonialCardProps {
  quote: string
  name: string
  role: string
  imageSrc: string
}

export default function TestimonialCard({ quote, name, role, imageSrc }: TestimonialCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <p className="text-gray-600 italic mb-4">"{quote}"</p>
      <div className="flex items-center">
        <Image src={imageSrc} alt={name} width={50} height={50} className="rounded-full mr-4" />
        <div>
          <h4 className="font-semibold text-gray-800">{name}</h4>
          <p className="text-gray-600">{role}</p>
        </div>
      </div>
    </div>
  )
}

