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
          <div key={parent.id}>
            <div 
              className={`p-4 rounded-lg text-center border-2 ${
                parent.isVerified 
                  ? 'border-purple-500 bg-purple-50' 
                  : 'border-purple-300'
              }`}
            >
              <h3 className="font-medium">{parent.name}</h3>
              <p className="text-sm text-gray-500">Parent</p>
              {parent.isVerified && (
                <Check 
                  className="h-4 w-4 absolute -top-2 -right-2 bg-purple-500 text-white rounded-full p-0.5" 
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
          <div key={sibling.id}>
            <div 
              className={`p-4 rounded-lg text-center border-2 ${
                sibling.isVerified 
                  ? 'border-purple-500 bg-purple-50' 
                  : 'border-purple-300'
              }`}
            >
              <h3 className="font-medium">{sibling.name}</h3>
              <p className="text-sm text-gray-500">Sibling</p>
              {sibling.isVerified && (
                <Check 
                  className="h-4 w-4 absolute -top-2 -right-2 bg-purple-500 text-white rounded-full p-0.5" 
                />
              )}
            </div>
          </div>
        ))}

        {/* Self */}
        <div>
          <div 
            className={`p-4 rounded-lg text-center border-2 ${
              family.self.isVerified 
                ? 'border-purple-500 bg-purple-50' 
                : 'border-purple-300'
            }`}
          >
            <h3 className="font-medium">{family.self.name}</h3>
            <p className="text-sm text-gray-500">You</p>
            {family.self.isVerified && (
              <Check 
                className="h-4 w-4 absolute -top-2 -right-2 bg-purple-500 text-white rounded-full p-0.5" 
              />
            )}
          </div>
        </div>

        {/* Spouse */}
        {family.spouse && (
          <div>
            <div 
              className={`p-4 rounded-lg text-center border-2 ${
                family.spouse.isVerified 
                  ? 'border-purple-500 bg-purple-50' 
                  : 'border-purple-300'
              }`}
            >
              <h3 className="font-medium">{family.spouse.name}</h3>
              <p className="text-sm text-gray-500">Spouse</p>
              {family.spouse.isVerified && (
                <Check 
                  className="h-4 w-4 absolute -top-2 -right-2 bg-purple-500 text-white rounded-full p-0.5" 
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
            <div key={child.id}>
              <div 
                className={`p-4 rounded-lg text-center border-2 ${
                  child.isVerified 
                    ? 'border-purple-500 bg-purple-50' 
                    : 'border-purple-300'
                }`}
              >
                <h3 className="font-medium">{child.name}</h3>
                <p className="text-sm text-gray-500">Child</p>
                {child.isVerified && (
                  <Check 
                    className="h-4 w-4 absolute -top-2 -right-2 bg-purple-500 text-white rounded-full p-0.5" 
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