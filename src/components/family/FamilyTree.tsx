import { FamilyTree } from '@/types/family';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';

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
            <Button
              variant="outline"
              className={`relative flex items-center gap-2 ${
                parent.isVerified 
                  ? 'bg-ninja-primary/5 hover:bg-ninja-primary/10 border-ninja-primary' 
                  : 'hover:bg-accent hover:text-accent-foreground'
              }`}
            >
              <span className="font-medium text-ninja-gray-900">{parent.name}</span>
              <span className="text-sm text-ninja-gray-600">Parent</span>
              {parent.isVerified && (
                <Check 
                  className="h-4 w-4 absolute -top-2 -right-2 bg-ninja-primary text-white rounded-full p-0.5" 
                />
              )}
            </Button>
          </div>
        ))}
      </div>

      {/* Self, Spouse & Siblings Level */}
      <div className="flex justify-center space-x-8">
        {/* Siblings */}
        {family.siblings.map(sibling => (
          <div key={sibling.id} className="relative">
            <Button
              variant="outline"
              className={`relative flex items-center gap-2 ${
                sibling.isVerified 
                  ? 'bg-ninja-primary/5 hover:bg-ninja-primary/10 border-ninja-primary' 
                  : 'hover:bg-accent hover:text-accent-foreground'
              }`}
            >
              <span className="font-medium text-ninja-gray-900">{sibling.name}</span>
              <span className="text-sm text-ninja-gray-600">Sibling</span>
              {sibling.isVerified && (
                <Check 
                  className="h-4 w-4 absolute -top-2 -right-2 bg-ninja-primary text-white rounded-full p-0.5" 
                />
              )}
            </Button>
          </div>
        ))}

        {/* Self */}
        <div className="relative">
          <Button
            variant="outline"
            className={`relative flex items-center gap-2 ${
              family.self.isVerified 
                ? 'bg-ninja-primary/5 hover:bg-ninja-primary/10 border-ninja-primary' 
                : 'hover:bg-accent hover:text-accent-foreground'
            }`}
          >
            <span className="font-medium text-ninja-gray-900">{family.self.name}</span>
            <span className="text-sm text-ninja-gray-600">You</span>
            {family.self.isVerified && (
              <Check 
                className="h-4 w-4 absolute -top-2 -right-2 bg-ninja-primary text-white rounded-full p-0.5" 
              />
            )}
          </Button>
        </div>

        {/* Spouse */}
        {family.spouse && (
          <div className="relative">
            <Button
              variant="outline"
              className={`relative flex items-center gap-2 ${
                family.spouse.isVerified 
                  ? 'bg-ninja-primary/5 hover:bg-ninja-primary/10 border-ninja-primary' 
                  : 'hover:bg-accent hover:text-accent-foreground'
              }`}
            >
              <span className="font-medium text-ninja-gray-900">{family.spouse.name}</span>
              <span className="text-sm text-ninja-gray-600">Spouse</span>
              {family.spouse.isVerified && (
                <Check 
                  className="h-4 w-4 absolute -top-2 -right-2 bg-ninja-primary text-white rounded-full p-0.5" 
                />
              )}
            </Button>
          </div>
        )}
      </div>

      {/* Children Level */}
      {family.children.length > 0 && (
        <div className="flex justify-center space-x-8">
          {family.children.map(child => (
            <div key={child.id} className="relative">
              <Button
                variant="outline"
                className={`relative flex items-center gap-2 ${
                  child.isVerified 
                    ? 'bg-ninja-primary/5 hover:bg-ninja-primary/10 border-ninja-primary' 
                    : 'hover:bg-accent hover:text-accent-foreground'
                }`}
              >
                <span className="font-medium text-ninja-gray-900">{child.name}</span>
                <span className="text-sm text-ninja-gray-600">Child</span>
                {child.isVerified && (
                  <Check 
                    className="h-4 w-4 absolute -top-2 -right-2 bg-ninja-primary text-white rounded-full p-0.5" 
                  />
                )}
              </Button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FamilyTreeComponent;