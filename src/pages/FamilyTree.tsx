import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { EmptyState } from "@/components/family/EmptyState";

const FamilyTreePage = () => {
  const navigate = useNavigate();

  const handleStartBuilding = () => {
    navigate("/family-tree/add");
  };

  return (
    <div className="min-h-screen bg-background py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-ninja-gray-900 mb-2">Family Tree</h1>
        <p className="text-ninja-gray-600 mb-8">
          Secure your future by getting your family details in one place
        </p>
        
        <EmptyState onStart={handleStartBuilding} />
      </div>
    </div>
  );
};

export default FamilyTreePage;