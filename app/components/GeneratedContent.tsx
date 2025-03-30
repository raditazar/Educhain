import React, { useState, useEffect } from "react";
import EditableTitle from "./EditableTitle";

interface GeneratedContentProps {
    title: string;
    imageUrls?: string[]; 
}

const GeneratedContent: React.FC<GeneratedContentProps> = ({ title: initialTitle, imageUrls }) => {
    const [title, setTitle] = useState(initialTitle);
    const [description, setDescription] = useState(
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    );
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // Placeholder untuk sementara
    const defaultImages = [
        "https://placehold.co/250x300?text=Image+1",
        "https://placehold.co/250x300?text=Image+2",
        "https://placehold.co/250x300?text=Image+3"
    ];

    const images = imageUrls && imageUrls.length > 0 ? imageUrls : defaultImages;

    useEffect(() => {
        if (imageUrls && imageUrls.length > 0) {
            setDescription("This is a dynamically generated narrative based on the AI-generated image.");
        }
    }, [imageUrls]);

    const prevImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    const nextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };
    const prevIndex = (currentImageIndex - 1 + images.length) % images.length;
    const nextIndex = (currentImageIndex + 1 ) % images.length;

    return (
        <div className="w-xl h-xl bg-white p-6 rounded-lg relative">
            {/* Title */}
            <EditableTitle title={title} setTitle={setTitle} />

            {/* Image Container */}
            {/* <div className="mt-4 flex justify-center items-center relative"> */}

            <div className="relative flex items-center justify-center mt-4 h-[320px]">
                {/* Prev Button */}
                <div className="absolute left-0 w-1/2 h-full overflow-hidden transform -translate-x-1/2">
                    <img 
                        src={images[prevIndex]}
                        alt="prev"
                        className="w-full h-full object-cover transition-all duration-500 opacity-50 transform scale-90" 
                        style={{clipPath: "inset(0 0 0 50%)"}}
                        />
                    </div>
                {/* Image Display */}
                <img 
                    src={images[currentImageIndex]} 
                    alt="Generated preview"
                    className="rounded-md shadow-lg w-60 h-80 transition-all duration-500 scale-100"
                />

                <div className="absolute right-0 w-1/2 h-full overflow-hidden transform translate-x-1/2">
                <img 
                    src={images[nextIndex]} 
                    alt="prev"
                    className="w-full h-full object-cover transition-all duration-500 opacity-50 transform scale-90" 
                    style={{clipPath: "inset(0 50% 0 0)"}}
                    />

                </div>
                {/* Next Button */}
                <button
                    onClick={nextImage}
                    className="absolute right-5 bg-black p-2 rounded-full shadow-md hover:bg-gray-400"
                >
                    ▶
                </button>
                <button
                    onClick={prevImage}
                    className="absolute left-5 bg-black p-2 rounded-full shadow-md hover:bg-gray-400"
                >
                    ◀
                </button>
            </div>

            {/* Subtitle Narrative */}
            <h3 className="text-lg font-semibold text-gray-700 mt-4">Narrative</h3>

            {/* Narrative Textbox */}
            <textarea
                className="w-full h-32 p-2 border-none rounded mt-2 bg-gray-100 text-gray-800 cursor-default"
                value={description}
                readOnly
            />
        </div>
    );
};

export default GeneratedContent;
