
import { useParams, Navigate, useNavigate } from "react-router-dom";
import { keypads } from "@/data/keypads";
import { KeypadView } from "@/components/keypad/KeypadView";
import { toast } from "sonner";

const KeypadPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  // Find the keypad with the matching id directly from the keypads file
  const keypad = keypads.find(k => k.id === id);
  
  // If no keypad is found, redirect to the keypads list
  if (!keypad) {
    toast.error("Keypad not found");
    return <Navigate to="/keypads" />;
  }
  
  return (
    <div className="bg-[#CCFFF2] min-h-screen flex justify-center">
      <KeypadView keypad={keypad} />
    </div>
  );
};

export default KeypadPage;
