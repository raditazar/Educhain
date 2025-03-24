import React from 'react'
interface EditableTitleProps{
    title: string;
    setTitle: React.Dispatch<React.SetStateAction<string>>
}

const EditableTitle: React.FC<EditableTitleProps> = ({ title, setTitle }) => {
    return (
        <div className='relative flex items-center w-full '>
            <input 
                type="text"
                className="text-2xl font-bold text-black text-center w-full p-1 border-0 rounded mb-4 focus:outline-none"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
        </div>
    );
};

export default EditableTitle;
