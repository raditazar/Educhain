"use client"

import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface ContentViewerProps {
  imageUrl: string
  title: string
  onPrevious?: () => void
  onNext?: () => void
}

export default function ContentViewer({ imageUrl, title, onPrevious, onNext }: ContentViewerProps) {
  return (
    <div className="relative aspect-[3/4] w-full">
      <Image src={imageUrl || "/placeholder.svg"} alt={title} fill className="object-cover" />

      {/* Navigation Arrows */}
      <button
        onClick={onPrevious}
        className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-black/50 rounded-full flex items-center justify-center"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={onNext}
        className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-black/50 rounded-full flex items-center justify-center"
      >
        <ChevronRight className="w-5 h-5" />
      </button>
    </div>
  )
}

