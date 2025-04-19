
import { keypads } from "@/data/keypads";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const KeypadsList = () => {
  const [localKeypads, setLocalKeypads] = useState(keypads);
  
  // Load keypads from localStorage if available
  useEffect(() => {
    const savedKeypads = localStorage.getItem('keypads');
    if (savedKeypads) {
      try {
        const parsedKeypads = JSON.parse(savedKeypads);
        setLocalKeypads(parsedKeypads);
      } catch (error) {
        console.error("Error parsing saved keypads:", error);
        // If there's an error parsing the saved keypads, fall back to the default keypads
        setLocalKeypads(keypads);
        localStorage.setItem('keypads', JSON.stringify(keypads));
        toast.error("Error loading saved keypads. Default keypads restored.");
      }
    } else {
      // If no saved keypads exist, save the default keypads to localStorage
      localStorage.setItem('keypads', JSON.stringify(keypads));
    }
  }, []);

  // Reset to defaults function (useful for troubleshooting)
  const resetToDefaults = () => {
    localStorage.setItem('keypads', JSON.stringify(keypads));
    setLocalKeypads(keypads);
    toast.success("Keypads reset to defaults");
  };

  return (
    <div className="bg-[#CCFFF2] min-h-screen flex flex-col items-center">
      <div className="max-w-md w-full px-6 py-12 flex flex-col items-center">
        <h1 className="text-3xl font-bold text-[#1E09BB] uppercase mb-4">Keypads</h1>
        <Separator className="w-full h-0.5 bg-[#1E09BB] mb-6" />
        
        <div className="grid grid-cols-3 gap-6 w-full mb-6">
          {localKeypads.map((keypad) => (
            <Link 
              key={keypad.id}
              to={`/keypad/${keypad.id}`}
              className="flex flex-col items-center text-[#1E09BB] hover:opacity-80 transition-opacity"
            >
              <div className="text-7xl font-light mb-1">{keypad.number}</div>
              <div className="text-xs uppercase text-center">
                {keypad.subtitle}
              </div>
            </Link>
          ))}
        </div>
        
        <Separator className="w-full h-0.5 bg-[#1E09BB] mb-6" />
        
        <div className="flex flex-col sm:flex-row gap-4">
          <Link to="/keypad-editor">
            <Button 
              className="bg-[#1E09BB] hover:bg-[#1E09BB]/90 text-white uppercase"
            >
              Edit Keypad Configurations
            </Button>
          </Link>
          
          <Button 
            variant="outline" 
            className="text-[#1E09BB] border-[#1E09BB]"
            onClick={resetToDefaults}
          >
            Reset to Defaults
          </Button>
        </div>
      </div>
    </div>
  );
};

export default KeypadsList;
