"use client"
import React, { useState } from "react";
import GlassBox from "../components/GlassBox";
import CreatorPage from "./CreatorPage";

const Page: React.FC = () => {
    const [showCreator, setShowCreator] = useState(false);

    return (
        <div className="flex flex-col items-center justify-center h-screen text-white pb-8">
            {!showCreator ? (
                <>
                    {/* <h1 className="text-3xl font-bold mb-8">Create something cool</h1> */}
                    <div className="w-5xl h-128 flex items-center justify-center">
                        <GlassBox
                            title="Create your Own Video / Images"
                            buttonText="Create"
                            onClick={() => setShowCreator(true)}
                        />
                    </div>
                </>
            ) : (
                <CreatorPage onBack={() => setShowCreator(false)} />
            )}
        </div>
    );
};

export default Page;
