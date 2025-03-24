import React, { useState, useEffect } from "react";
import EditableTitle from "./EditableTitle";

interface GeneratedContentProps {
    title: string;
    imageUrl?: string;
}

const GeneratedContent: React.FC<GeneratedContentProps> = ({ title: initialTitle, imageUrl }) => {
    const [title, setTitle] = useState(initialTitle);
    const [description, setDescription] = useState("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.");

    // Fungsi untuk menghasilkan narrative berdasarkan gambar
    useEffect(() => {
        if (imageUrl) {
            setDescription("This is a dynamically generated narrative based on the AI-generated image.");
        }
    }, [imageUrl]); // Akan dipanggil setiap kali `imageUrl` berubah

    return (
        <div className="w-xl h-xl bg-white p-6 rounded-lg">
            <EditableTitle title={title} setTitle={setTitle} />
            <div className="mt-4 flex justify-center">
                <img 
                    src={imageUrl || "https://placehold.co/250x300"} 
                    alt="Generated preview"
                    className="rounded-md shadow-md"
                />
            </div>

            {/* Subtitle Narrative */}
            <h3 className="text-lg font-semibold text-gray-700 mt-4">Narrative</h3>

            {/* Narrative Textbox */}
            <textarea
                className="w-full h-[120px] p-2 border-none rounded mt-2 bg-gray-100 text-gray-800 cursor-default"
                value={description}
                readOnly
            />
        </div>
    );
};

export default GeneratedContent;
