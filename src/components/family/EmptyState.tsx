import { Button } from "@/components/ui/button";
import { UserPlus } from "lucide-react";

interface EmptyStateProps {
  onStart: () => void;
}

export const EmptyState = ({ onStart }: EmptyStateProps) => {
  return (
    <div className="flex flex-col items-center justify-center p-8 text-center bg-white rounded-lg border border-ninja-gray-200 shadow-sm">
      <div className="w-16 h-16 mb-6 rounded-full bg-ninja-primary/10 flex items-center justify-center">
        <UserPlus className="w-8 h-8 text-ninja-primary" />
      </div>
      
      <h2 className="text-2xl font-semibold text-ninja-gray-900 mb-3">
        Start Building Your Family Tree
      </h2>
      
      <p className="text-ninja-gray-600 mb-8 max-w-md">
        Let's secure your future by getting your family details in one place. Your data will remain private and is used only to verify relationships.
      </p>
      
      <Button 
        onClick={onStart}
        className="flex items-center gap-2"
      >
        <UserPlus className="w-4 h-4" />
        Start Now
      </Button>
      
      <p className="mt-4 text-sm text-ninja-gray-500">
        Your data is protected and encrypted
      </p>
    </div>
  );
};