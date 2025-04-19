
import { useParams, Navigate } from "react-router-dom";
import { keypads } from "@/data/keypads";
import { KeypadView } from "@/components/keypad/KeypadView";
import { useEffect, useState } from "react";

const KeypadPage = () => {
  const { id } = useParams<{ id: string }>();
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
  
  // Find the keypad with the matching id
  const keypad = localKeypads.find(k => k.id === id);
  
  // If no keypad is found, redirect to the keypads list
  if (!keypad) {
    return <Navigate to="/keypads" />;
  }
  
  return <KeypadView keypad={keypad} />;
};

export default KeypadPage;
