import { useState } from 'react';
import Image from 'next/image';
import Chevron from '../../img/Chevron.svg';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleOption = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-48 ">
      <div className="p-2">
        <p className="font-semibold ml-1 text-gray-600">Group title</p>
        <div className="mt-4">
        <button
            onClick={toggleOption}
            className="flex justify-between items-center w-full mx-2 text-left py-2 px-3 bg-gray-200 rounded-lg hover:bg-gray-300"
          >
            <div className="flex items-center">
              <Image 
                src={Chevron} 
                width={16} 
                height={16} 
                alt="Chevron" 
                className={`transform transition-transform duration-300 ${isOpen ? 'rotate-90' : ''}`} 
              />
              <span className="text-gray-800 ml-2">Option</span>
            </div>
            <span>{isOpen ? '-' : '+'}</span>
          </button>
          {isOpen && (
            <div className="ml-6 mt-2">
              <div className="flex items-center">
                <Image src={Chevron} width={16} height={16} alt="Chevron" className="mr-2" />
                <p className="py-2 text-gray-700 hover:bg-gray-200 cursor-pointer rounded-md">Item 1</p>
              </div>
              <div className="flex items-center">
                <Image src={Chevron} width={16} height={16} alt="Chevron" className="mr-2" />
                <p className="py-2 text-gray-700 hover:bg-gray-200 cursor-pointer rounded-md">Item 2</p>
              </div>
              <div className="flex items-center">
                <Image src={Chevron} width={16} height={16} alt="Chevron" className="mr-2" />
                <p className="py-2 text-gray-700 hover:bg-gray-200 cursor-pointer rounded-md">Item 3</p>
              </div>
              <div className="flex items-center">
                <Image src={Chevron} width={16} height={16} alt="Chevron" className="mr-2" />
                <p className="py-2 text-gray-700 hover:bg-gray-200 cursor-pointer rounded-md">Item 4</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
