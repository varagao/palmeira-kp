
import { keypads } from "@/data/keypads";
import { KeypadView } from "@/components/keypad/KeypadView";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const Index = () => {
  const navigate = useNavigate();
  const [localKeypads, setLocalKeypads] = useState(keypads);
  
  // Load keypads from localStorage if available
  useEffect(() => {
    const savedKeypads = localStorage.getItem('keypads');
    if (savedKeypads) {
      try {
        const parsedKeypads = JSON.parse(savedKeypads);
        setLocalKeypads(parsedKeypads);
        
        // Navigate to the first keypad
        if (parsedKeypads.length > 0) {
          navigate(`/keypad/${parsedKeypads[0].id}`);
        }
      } catch (error) {
        console.error("Error parsing saved keypads:", error);
        // Navigate to the first default keypad if there's an error
        navigate(`/keypad/${keypads[0].id}`);
      }
    } else {
      // If no saved keypads, navigate to the first default keypad
      navigate(`/keypad/${keypads[0].id}`);
    }
  }, [navigate]);
  
  // This is just a fallback if the redirect doesn't happen
  return localKeypads.length > 0 ? <KeypadView keypad={localKeypads[0]} /> : null;
};

export default Index;
