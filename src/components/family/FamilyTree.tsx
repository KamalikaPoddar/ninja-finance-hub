import { FamilyTree } from '@/types/family';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { cn } from '@/lib/utils';

const NEXT_STEPS = {
  unverified: [
    'Verify the relationship',
    'Provide relationship proof',
    'Wait for verification'
  ],
  verified: [
    'You are good to go!'
  ]
};

interface FamilyTreeProps {
  family: FamilyTree;
}

const FamilyTreeComponent = ({ family }: FamilyTreeProps) => {
  const buttonStyles = (isVerified: boolean | undefined) => cn(
    "relative flex items-center gap-2 min-w-[150px]",
    isVerified 
      ? "bg-ninja-primary/5 hover:bg-ninja-primary/10 border-ninja-primary" 
      : "hover:bg-accent hover:text-accent-foreground"
  );

  return (
    <div className="space-y-8">
      {/* Parents Level */}
      <div className="flex justify-center gap-8 flex-wrap">
        {family.parents.map(parent => (
          <div key={parent.id} className="relative">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="outline"
                    className={buttonStyles(parent.isVerified)}
                  >
                    <span className="font-medium text-ninja-gray-900">{parent.name}</span>
                    <span className="text-sm text-ninja-gray-600">Parent</span>
                    {parent.isVerified && (
                      <Check
                        className="h-4 w-4 absolute -top-2 -right-2 bg-ninja-primary text-white rounded-full p-0.5"
                      />
                    )}
                  </Button>
                </TooltipTrigger>
                <TooltipContent className="max-w-[300px]">
                  <div className="space-y-2">
                    <h4 className="font-medium">Next Steps:</h4>
                    <ul className="list-disc list-inside text-sm">
                      {NEXT_STEPS[parent.isVerified ? 'verified' : 'unverified'].map((step, i) => (
                        <li key={i}>{step}</li>
                      ))}
                    </ul>
                  </div>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        ))}
      </div>

      {/* Self, Spouse & Siblings Level */}
      <div className="flex justify-center gap-8 flex-wrap">
        {/* Siblings */}
        {family.siblings.map(sibling => (
          <div key={sibling.id} className="relative">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="outline"
                    className={buttonStyles(sibling.isVerified)}
                  >
                    <span className="font-medium text-ninja-gray-900">{sibling.name}</span>
                    <span className="text-sm text-ninja-gray-600">Sibling</span>
                    {sibling.isVerified && (
                      <Check
                        className="h-4 w-4 absolute -top-2 -right-2 bg-ninja-primary text-white rounded-full p-0.5"
                      />
                    )}
                  </Button>
                </TooltipTrigger>
                <TooltipContent className="max-w-[300px]">
                  <div className="space-y-2">
                    <h4 className="font-medium">Next Steps:</h4>
                    <ul className="list-disc list-inside text-sm">
                      {NEXT_STEPS[sibling.isVerified ? 'verified' : 'unverified'].map((step, i) => (
                        <li key={i}>{step}</li>
                      ))}
                    </ul>
                  </div>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        ))}

        {/* Self */}
        <div className="relative">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="outline"
                  className={buttonStyles(family.self.isVerified)}
                >
                  <span className="font-medium text-ninja-gray-900">{family.self.name}</span>
                  <span className="text-sm text-ninja-gray-600">You</span>
                  {family.self.isVerified && (
                    <Check
                      className="h-4 w-4 absolute -top-2 -right-2 bg-ninja-primary text-white rounded-full p-0.5"
                    />
                  )}
                </Button>
              </TooltipTrigger>
              <TooltipContent className="max-w-[300px]">
                <div className="space-y-2">
                  <h4 className="font-medium">Next Steps:</h4>
                  <ul className="list-disc list-inside text-sm">
                    {NEXT_STEPS[family.self.isVerified ? 'verified' : 'unverified'].map((step, i) => (
                      <li key={i}>{step}</li>
                    ))}
                  </ul>
                </div>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>

        {/* Spouse */}
        {family.spouse && (
          <div className="relative">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="outline"
                    className={buttonStyles(family.spouse.isVerified)}
                  >
                    <span className="font-medium text-ninja-gray-900">{family.spouse.name}</span>
                    <span className="text-sm text-ninja-gray-600">Spouse</span>
                    {family.spouse.isVerified && (
                      <Check
                        className="h-4 w-4 absolute -top-2 -right-2 bg-ninja-primary text-white rounded-full p-0.5"
                      />
                    )}
                  </Button>
                </TooltipTrigger>
                <TooltipContent className="max-w-[300px]">
                  <div className="space-y-2">
                    <h4 className="font-medium">Next Steps:</h4>
                    <ul className="list-disc list-inside text-sm">
                      {NEXT_STEPS[family.spouse.isVerified ? 'verified' : 'unverified'].map((step, i) => (
                        <li key={i}>{step}</li>
                      ))}
                    </ul>
                  </div>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        )}
      </div>

      {/* Children Level */}
      {family.children.length > 0 && (
        <div className="flex justify-center gap-8 flex-wrap">
          {family.children.map(child => (
            <div key={child.id} className="relative">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="outline"
                      className={buttonStyles(child.isVerified)}
                    >
                      <span className="font-medium text-ninja-gray-900">{child.name}</span>
                      <span className="text-sm text-ninja-gray-600">Child</span>
                      {child.isVerified && (
                        <Check
                          className="h-4 w-4 absolute -top-2 -right-2 bg-ninja-primary text-white rounded-full p-0.5"
                        />
                      )}
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent className="max-w-[300px]">
                    <div className="space-y-2">
                      <h4 className="font-medium">Next Steps:</h4>
                      <ul className="list-disc list-inside text-sm">
                        {NEXT_STEPS[child.isVerified ? 'verified' : 'unverified'].map((step, i) => (
                          <li key={i}>{step}</li>
                        ))}
                      </ul>
                    </div>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FamilyTreeComponent;