
import { keypads } from "@/data/keypads";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Index = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    // Force refresh of keypads data to ensure latest changes are loaded
    localStorage.setItem('keypads', JSON.stringify(keypads));
    
    // Navigate to the keypads list
    navigate('/keypads');
  }, [navigate]);
  
  return (
    <div className="flex justify-center items-center h-screen bg-[#CCFFF2]">
      <p>Redirecting to keypads...</p>
    </div>
  );
};

export default Index;
