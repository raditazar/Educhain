import { useState } from "react";
interface ModalProps{
    setIsModalOpen: (value: boolean) => void;
    setDescription: (value: string) => void;
}

const Modal: React.FC<ModalProps> = ({ setIsModalOpen, setDescription }) => {
    const [tempDescription, setTempDescription] = useState("");

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm">
            <div className="bg-white p-6 rounded-lg shadow-lg w-2xl">
                <h2 className="text-lg font-normal text-center text-black">Description</h2>
                
                <div className="relative w-full">
                    {/* Textarea Input */}
                    <textarea 
                        className="w-full h-96 p-3 mt-3 border-gray-300 rounded-lg bg-gray-100 focus:ring-2 focus:ring-gray-200 outline-none text-black"
                        placeholder="Type here"
                        value={tempDescription}
                        onChange={(e) => setTempDescription(e.target.value)}
                    />

                    {/* AI Suggestion Button */}
                    <button className="absolute bottom-4 left-2 w-48 mt-3 py-2 bg-gray-300 text-white rounded-lg">
                        AI Suggestion ↓
                    </button>

                </div>

                {/* Action Buttons */}
                <div className="flex justify-end gap-2 mt-4">
                    {/* <button 
                        onClick={() => setIsModalOpen(false)} 
                        className="px-4 py-2 bg-gray-300 rounded-lg"
                    >
                        Cancel
                    </button> */}
                    <button 
                        onClick={() => { 
                            setDescription(tempDescription); 
                            setIsModalOpen(false);
                        }} 
                        style={{backgroundColor:'var(--highlight'}}
                        className="w-48 justify-center px-6 py-2  text-black rounded-lg flex items-center gap-1 cursor-pointer"

                    >
                        Next →
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Modal;
