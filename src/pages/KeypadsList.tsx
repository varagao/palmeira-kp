
import { keypads } from "@/data/keypads";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const KeypadsList = () => {
  const [localKeypads, setLocalKeypads] = useState(keypads);
  
  // Load keypads from localStorage if available
  useEffect(() => {
    const savedKeypads = localStorage.getItem('keypads');
    if (savedKeypads) {
      try {
        setLocalKeypads(JSON.parse(savedKeypads));
      } catch (error) {
        console.error("Error parsing saved keypads:", error);
      }
    }
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-[#1E09BB] mb-8">All Keypads</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {localKeypads.map(keypad => (
          <Link 
            key={keypad.id} 
            to={`/keypad/${keypad.id}`}
            className="border border-[#1E09BB] rounded-lg p-6 hover:bg-[#CCFFF2] transition-colors"
          >
            <div className="text-center">
              <div className="text-xl text-[#1E09BB] font-medium uppercase">{keypad.title}</div>
              <div className="text-5xl font-light text-[#1E09BB] my-4">{keypad.number}</div>
              <div className="text-[#1E09BB] uppercase">{keypad.subtitle}</div>
            </div>
          </Link>
        ))}
      </div>
      
      <Link 
        to="/keypad-editor"
        className="block w-full max-w-xs mx-auto mt-12 bg-[#1E09BB] text-white text-center py-3 rounded-md hover:bg-opacity-90 transition-colors"
      >
        Edit Keypad Configurations
      </Link>
    </div>
  );
};

export default KeypadsList;
