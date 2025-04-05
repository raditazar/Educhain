import React, { useState } from "react";
import Dropdown from "../components/Dropdown";
import CategorySelector from "../components/CategorySelector";
import Modal from "../components/Modal";
import GeneratedContent from "../components/GeneratedContent";
import { erc721Abi } from "viem";
import { useWriteContract , useWaitForTransactionReceipt} from 'wagmi'
import EdugramNFTABI from "../../lib/abi/EdugramNFTABI.json"
interface CreatorPageProps {
    onBack?: () => void;
}

const CreatorPage: React.FC<CreatorPageProps> = ({ onBack }) => {
    const [title, setTitle] = useState("Title");
    const [description, setDescription] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [voiceStyle, setVoiceStyle] = useState("Presets 1");
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
    const [imageUrl, setImageUrl] = useState<string[] | undefined>(undefined);
    const {writeContract, data: hash, isPending} = useWriteContract();
    const {isSuccess, isLoading} = useWaitForTransactionReceipt({hash});

    const handleMint = async() => {
     await writeContract({
      abi: EdugramNFTABI,
      address: '0x412D0d0a077548da4C80e569801E52bB0dF944c0',
      functionName: 'mintTo',
      args:[
        "0xd96DAF4de578d5B42B719eD64Be4c447Bae42cC1",
      ]
     })
    }
    return (
        <div className="flex justify-center items-center min-h-screen pb-8">
            <div className="flex gap-8 rounded-lg  backdrop-blur-md">
                <div>
                  <GeneratedContent
                  title={title}
                  imageUrls={imageUrl}
                />
                </div>
                

                <div className="w-xl bg-white p-6 rounded-lg relative">
                    <h2 className="text-black mb-5 text-center">Details</h2>
                  
                    <label className="block text-black">Descriptions</label>
                    <textarea
                        className="w-full h-[160px] p-4 border-gray-700 rounded-2xl mt-1 cursor-pointer bg-gray-100 text-gray-700 placeholder-gray-500"
                        value={description}
                        onClick={() => setIsModalOpen(true)}
                        readOnly
                        placeholder="Type here"
                    />

                    <label className="block mt-4 mb-1 text-gray-700">Voice Style</label>
                    <Dropdown 
                      value={voiceStyle} 
                      onChange={setVoiceStyle} 
                      className="bg-gray-100 text-black"
                    />

                    <label className="block mt-4 mb-2 text-gray-600">Category</label>
                    <CategorySelector selected={selectedCategories} setSelected={setSelectedCategories} />
                    <div className="absolute bottom-6 right-6">
                      {/* <button 
                        style={{backgroundColor:'var(--highlight'}}
                        className="mt-6 text-black px-6 py-2 rounded-md w-full cursor-pointer"
                        onClick={()=>console.log("Clicled")}>
                          Confirm →
                      </button> */}
                      <button 
                        style={{backgroundColor:'var(--highlight'}}
                        className="mt-6 text-black px-6 py-2 rounded-md w-full cursor-pointer"
                        onClick={handleMint}>
                          Confirm2 →
                      </button>
                      
                      <h1 className="text-black">
                      {isPending ? 'sedang pending' : ' tidak pending'} <br />
                      {isLoading ? 'sedang loading' : 'tidak loading'}
                      </h1>

                    </div>
                </div>
            </div>

            {isModalOpen && <Modal setIsModalOpen={setIsModalOpen} setDescription={setDescription} />}
        </div>
    );
};

export default CreatorPage;
