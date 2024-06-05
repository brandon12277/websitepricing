import React, { useState } from 'react';

const ToggleBlock = ({ packageName, price, packageDetails }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleBlock = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full mx-10  text-left text-sm">
      <div className="border  rounded-md p-4">
        <div className="flex items-center justify-between cursor-pointer" onClick={toggleBlock}>
          <span className=" font-bold roboto"> 
            {isOpen ? '-' : '+'} {packageName} { price ? <>({price})</> : <></>}
          </span>
        </div>
        {isOpen && (
          <div className="mt-4  pt-4">
          
            {packageDetails.map((section, index) => (
              <div key={index} className="mb-4">
                <h2 className="text-lg font-bold mb-2">{section.heading}</h2>
                <ul className="list-disc pl-4">
                  {section.points.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
};

export default ToggleBlock;
