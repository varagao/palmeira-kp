
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Index = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    // Navigate directly to the keypads list without localStorage manipulation
    navigate('/keypads');
  }, [navigate]);
  
  return (
    <div className="flex justify-center items-center h-screen bg-[#CCFFF2]">
      <p>Redirecting to keypads...</p>
    </div>
  );
};

export default Index;
