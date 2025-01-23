import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { EmptyState } from "@/components/family/EmptyState";
import FamilyTreeComponent from "@/components/family/FamilyTree";
import { useState } from "react";
import type { FamilyTree } from "@/types/family";

const FamilyTreePage = () => {
  const navigate = useNavigate();
  const [familyData] = useState<FamilyTree>({
    parents: [
      { id: '1', name: 'John Doe', relationship: 'parent', isVerified: true },
      { id: '2', name: 'Jane Doe', relationship: 'parent', isVerified: false }
    ],
    self: { id: '3', name: 'You', relationship: 'self', isVerified: true },
    siblings: [
      { id: '4', name: 'Jack Doe', relationship: 'sibling', isVerified: false }
    ],
    spouse: { id: '5', name: 'Sarah Doe', relationship: 'spouse', isVerified: true },
    children: [
      { id: '6', name: 'Jimmy Doe', relationship: 'child', isVerified: false }
    ]
  });

  const handleStartBuilding = () => {
    navigate("/family-tree/add");
  };

  return (
    <div className="min-h-screen bg-background py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-ninja-gray-900 mb-2">Family Tree</h1>
            <p className="text-ninja-gray-600">
              Secure your future by getting your family details in one place
            </p>
          </div>
          <Button 
            onClick={handleStartBuilding}
            className="bg-ninja-primary text-white hover:bg-ninja-primary/90"
          >
            Add Family Member
          </Button>
        </div>
        
        {Object.keys(familyData).length > 0 ? (
          <FamilyTreeComponent family={familyData} />
        ) : (
          <EmptyState onStart={handleStartBuilding} />
        )}
      </div>
    </div>
  );
};

export default FamilyTreePage;