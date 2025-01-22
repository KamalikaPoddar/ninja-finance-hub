import { FamilyTree } from '@/types/family';
import { theme } from '@/config/theme';
import { Check } from 'lucide-react';

interface FamilyTreeProps {
  family: FamilyTree;
}

const FamilyTreeComponent = ({ family }: FamilyTreeProps) => {
  return (
    <div className="space-y-8">
      {/* Parents Level */}
      <div className="flex justify-center space-x-8">
        {family.parents.map(parent => (
          <div key={parent.id} className="relative">
            <div 
              className={`p-4 rounded-md text-center border ${
                parent.isVerified 
                  ? 'border-ninja-primary bg-ninja-primary/5' 
                  : 'border-ninja-primary/50'
              } hover:shadow-sm transition-shadow`}
            >
              <h3 className="font-medium text-ninja-gray-900">{parent.name}</h3>
              <p className="text-sm text-ninja-gray-600">Parent</p>
              {parent.isVerified && (
                <Check 
                  className="h-4 w-4 absolute -top-2 -right-2 bg-ninja-primary text-white rounded-full p-0.5" 
                />
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Self, Spouse & Siblings Level */}
      <div className="flex justify-center space-x-8">
        {/* Siblings */}
        {family.siblings.map(sibling => (
          <div key={sibling.id} className="relative">
            <div 
              className={`p-4 rounded-md text-center border ${
                sibling.isVerified 
                  ? 'border-ninja-primary bg-ninja-primary/5' 
                  : 'border-ninja-primary/50'
              } hover:shadow-sm transition-shadow`}
            >
              <h3 className="font-medium text-ninja-gray-900">{sibling.name}</h3>
              <p className="text-sm text-ninja-gray-600">Sibling</p>
              {sibling.isVerified && (
                <Check 
                  className="h-4 w-4 absolute -top-2 -right-2 bg-ninja-primary text-white rounded-full p-0.5" 
                />
              )}
            </div>
          </div>
        ))}

        {/* Self */}
        <div className="relative">
          <div 
            className={`p-4 rounded-md text-center border ${
              family.self.isVerified 
                ? 'border-ninja-primary bg-ninja-primary/5' 
                : 'border-ninja-primary/50'
            } hover:shadow-sm transition-shadow`}
          >
            <h3 className="font-medium text-ninja-gray-900">{family.self.name}</h3>
            <p className="text-sm text-ninja-gray-600">You</p>
            {family.self.isVerified && (
              <Check 
                className="h-4 w-4 absolute -top-2 -right-2 bg-ninja-primary text-white rounded-full p-0.5" 
              />
            )}
          </div>
        </div>

        {/* Spouse */}
        {family.spouse && (
          <div className="relative">
            <div 
              className={`p-4 rounded-md text-center border ${
                family.spouse.isVerified 
                  ? 'border-ninja-primary bg-ninja-primary/5' 
                  : 'border-ninja-primary/50'
              } hover:shadow-sm transition-shadow`}
            >
              <h3 className="font-medium text-ninja-gray-900">{family.spouse.name}</h3>
              <p className="text-sm text-ninja-gray-600">Spouse</p>
              {family.spouse.isVerified && (
                <Check 
                  className="h-4 w-4 absolute -top-2 -right-2 bg-ninja-primary text-white rounded-full p-0.5" 
                />
              )}
            </div>
          </div>
        )}
      </div>

      {/* Children Level */}
      {family.children.length > 0 && (
        <div className="flex justify-center space-x-8">
          {family.children.map(child => (
            <div key={child.id} className="relative">
              <div 
                className={`p-4 rounded-md text-center border ${
                  child.isVerified 
                    ? 'border-ninja-primary bg-ninja-primary/5' 
                    : 'border-ninja-primary/50'
                } hover:shadow-sm transition-shadow`}
              >
                <h3 className="font-medium text-ninja-gray-900">{child.name}</h3>
                <p className="text-sm text-ninja-gray-600">Child</p>
                {child.isVerified && (
                  <Check 
                    className="h-4 w-4 absolute -top-2 -right-2 bg-ninja-primary text-white rounded-full p-0.5" 
                  />
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FamilyTreeComponent;