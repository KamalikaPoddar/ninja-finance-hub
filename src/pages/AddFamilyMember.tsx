import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const AddFamilyMember = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-ninja-gray-900 mb-2">Add Family Member</h1>
        <p className="text-ninja-gray-600 mb-8">
          Let's add your first family member
        </p>
        
        {/* Placeholder for the form - will be implemented in next step */}
        <div className="bg-white rounded-lg border border-ninja-gray-200 p-8">
          <p className="text-ninja-gray-600 text-center">Form coming soon...</p>
          <Button 
            onClick={() => navigate('/family-tree')}
            className="mt-4"
          >
            Back to Family Tree
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AddFamilyMember;