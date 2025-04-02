"use client";

import { use, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { X } from "lucide-react";
import Bar from "@/app/components/content/Bar";
import ContentViewer from "@/app/components/content/ContentViewer";
import ContentInfo from "@/app/components/content/ContentInfo";
import RelatedContent from "@/app/components/content/RelatedContent";
import AboutContent from "@/app/components/content/AboutContent";
import type { ContentItemProps } from "@/app/components/explore/ContentCard";

interface ContentDetailProps {
  params: Promise<{ id: string }>; // ✅ Perbaiki params jadi Promise
}

export default function ContentDetailPage({ params }: ContentDetailProps) {
  const { id } = use(params); // ✅ Gunakan use(params)
  const router = useRouter();
  const [content, setContent] = useState<ContentItemProps | null>(null);
  const [relatedContent, setRelatedContent] = useState<ContentItemProps[]>([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 4; // Placeholder for total slides

  // Fetch content data
  useEffect(() => {
    const fetchedContent: ContentItemProps = {
      id,
      title: "Viking w chem music",
      imageUrl: "/placeholder.svg?height=400&width=300",
      creator: {
        name: "MathTech",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      likes: 42,
      views: 189,
    };

    setContent(fetchedContent);

    const fetchedRelatedContent: ContentItemProps[] = Array(3)
      .fill(null)
      .map((_, index) => ({
        id: `related-${index}`,
        title: index === 0 ? "History of medieval castles" : "Making AI-generated content",
        imageUrl: "/placeholder.svg?height=200&width=150",
        creator: {
          name: "Creator Name",
          avatar: "/placeholder.svg?height=24&width=24",
        },
        likes: Math.floor(Math.random() * 100),
        views: Math.floor(Math.random() * 1000),
      }));

    setRelatedContent(fetchedRelatedContent);
  }, [id]); // ✅ Gunakan `id` dari use(params)

  const handlePreviousSlide = () => {
    setCurrentSlide((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev < totalSlides - 1 ? prev + 1 : prev));
  };

  if (!content) {
    return (
      <div className="min-h-screen bg-[#1a3158] text-white flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#EACA91]"></div>
      </div>
    );
  }

  const contentDescription = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...`;

  return (
    <div className="min-h-screen text-white">
      <div className="container mx-auto px-4 py-8">
        <Bar currentSlide={currentSlide} totalSlides={totalSlides} />
        <div className="max-w-6xl mx-auto relative">
          <button
            onClick={() => router.back()}
            className="absolute -left-12 top-0 w-8 h-8 bg-[#EACA91] rounded-full flex items-center justify-center text-black"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 max-w-6xl mx-auto">
          <div className="lg:w-1/2">
            <div className="bg-[#2a3f5f] rounded-lg overflow-hidden">
              <ContentViewer imageUrl={content.imageUrl} title={content.title} onPrevious={handlePreviousSlide} onNext={handleNextSlide} />
              <ContentInfo title={content.title} creator={content.creator} likes={content.likes} />
            </div>
          </div>

          <div className="lg:w-1/2 bg-[#1f3049] 
          
          ">
            <RelatedContent items={relatedContent} />
            <AboutContent description={contentDescription} />
          </div>
        </div>
      </div>
    </div>
  );
}
