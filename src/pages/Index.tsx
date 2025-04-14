
import { keypads } from "@/data/keypads";
import { KeypadView } from "@/components/keypad/KeypadView";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Index = () => {
  const navigate = useNavigate();
  
  // Redirect to the first keypad
  useEffect(() => {
    navigate(`/keypad/${keypads[0].id}`);
  }, [navigate]);
  
  // This is just a fallback if the redirect doesn't happen
  return <KeypadView keypad={keypads[0]} />;
};

export default Index;
