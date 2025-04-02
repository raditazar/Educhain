import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import type { ContentItemProps } from "../explore/ContentCard"
interface RelatedContentProps {
  items: ContentItemProps[]
}

export default function RelatedContent({ items }: RelatedContentProps) {
  return (
    <div className="mb-8">
      <h2 className="text-xl font-bold mb-4">More Content</h2>

      <div className="relative">
        <div className="flex gap-4 overflow-x-auto pb-4">
          {items.map((item, index) => (
            <div key={item.id} className="min-w-[200px] bg-[#2a3f5f] rounded-lg overflow-hidden">
              <div className="relative aspect-[3/4] w-full">
                <Image src={item.imageUrl || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
              </div>
              <div className="p-2 text-xs">
                {index === 0 ? "Image 1 (from castle region.jpg)" : `Image ${index + 1}`}
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button className="absolute left-0 top-1/3 -translate-y-1/2 w-6 h-6 bg-black/50 rounded-full flex items-center justify-center">
          <ChevronLeft className="w-4 h-4" />
        </button>
        <button className="absolute right-0 top-1/3 -translate-y-1/2 w-6 h-6 bg-black/50 rounded-full flex items-center justify-center">
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  )
}

