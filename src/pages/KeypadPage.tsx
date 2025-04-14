
import { useParams, Navigate } from "react-router-dom";
import { keypads } from "@/data/keypads";
import { KeypadView } from "@/components/keypad/KeypadView";

const KeypadPage = () => {
  const { id } = useParams<{ id: string }>();
  
  // Find the keypad with the matching id
  const keypad = keypads.find(k => k.id === id);
  
  // If no keypad is found, redirect to the keypads list
  if (!keypad) {
    return <Navigate to="/keypads" />;
  }
  
  return <KeypadView keypad={keypad} />;
};

export default KeypadPage;
