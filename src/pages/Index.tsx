
import { keypads } from "@/data/keypads";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { toast } from "sonner";

const Index = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    // Always ensure we have keypads in localStorage
    const savedKeypads = localStorage.getItem('keypads');
    if (!savedKeypads) {
      // If no saved keypads, initialize with default
      localStorage.setItem('keypads', JSON.stringify(keypads));
    }
    
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
