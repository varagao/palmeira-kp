
import { useParams, Navigate, useNavigate } from "react-router-dom";
import { keypads } from "@/data/keypads";
import { KeypadView } from "@/components/keypad/KeypadView";
import { useEffect, useState } from "react";
import { toast } from "sonner";

const KeypadPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [localKeypads, setLocalKeypads] = useState(keypads);
  const [isLoading, setIsLoading] = useState(true);
  
  // Load keypads from localStorage if available
  useEffect(() => {
    setIsLoading(true);
    const savedKeypads = localStorage.getItem('keypads');
    if (savedKeypads) {
      try {
        const parsedKeypads = JSON.parse(savedKeypads);
        setLocalKeypads(parsedKeypads);
      } catch (error) {
        console.error("Error parsing saved keypads:", error);
        // If there's an error parsing the saved keypads, fall back to the default keypads
        toast.error("Error loading keypad data. Using default configuration.");
      }
    }
    setIsLoading(false);
  }, [id]);
  
  if (isLoading) {
    return <div className="flex justify-center items-center h-screen bg-[#CCFFF2]">Loading keypad...</div>;
  }
  
  // Find the keypad with the matching id
  const keypad = localKeypads.find(k => k.id === id);
  
  // If no keypad is found, redirect to the keypads list
  if (!keypad) {
    toast.error("Keypad not found");
    return <Navigate to="/keypads" />;
  }
  
  return <KeypadView keypad={keypad} />;
};

export default KeypadPage;
