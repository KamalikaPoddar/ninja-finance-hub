import { FamilyTree } from '@/types/family';
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
              className={`inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 border border-ninja-primary px-4 py-2 ${
                parent.isVerified 
                  ? 'bg-ninja-primary/5 hover:bg-ninja-primary/10' 
                  : 'hover:bg-accent hover:text-accent-foreground'
              }`}
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
              className={`inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 border border-ninja-primary px-4 py-2 ${
                sibling.isVerified 
                  ? 'bg-ninja-primary/5 hover:bg-ninja-primary/10' 
                  : 'hover:bg-accent hover:text-accent-foreground'
              }`}
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
            className={`inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 border border-ninja-primary px-4 py-2 ${
              family.self.isVerified 
                ? 'bg-ninja-primary/5 hover:bg-ninja-primary/10' 
                : 'hover:bg-accent hover:text-accent-foreground'
            }`}
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
              className={`inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 border border-ninja-primary px-4 py-2 ${
                family.spouse.isVerified 
                  ? 'bg-ninja-primary/5 hover:bg-ninja-primary/10' 
                  : 'hover:bg-accent hover:text-accent-foreground'
              }`}
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
                className={`inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 border border-ninja-primary px-4 py-2 ${
                  child.isVerified 
                    ? 'bg-ninja-primary/5 hover:bg-ninja-primary/10' 
                    : 'hover:bg-accent hover:text-accent-foreground'
                }`}
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