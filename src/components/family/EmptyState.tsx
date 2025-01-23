import { Button } from "@/components/ui/button";
import { Users } from "lucide-react";

interface EmptyStateProps {
  onStart: () => void;
}

export const EmptyState = ({ onStart }: EmptyStateProps) => {
  return (
    <div className="flex flex-col items-center justify-center p-8 bg-white rounded-lg border border-ninja-gray-200">
      <div className="w-16 h-16 bg-ninja-primary/10 rounded-full flex items-center justify-center mb-6">
        <Users className="w-8 h-8 text-ninja-primary" />
      </div>
      
      <h2 className="text-xl font-semibold text-ninja-gray-900 mb-2">
        Start Building Your Family Tree
      </h2>
      
      <p className="text-ninja-gray-600 text-center max-w-md mb-6">
        Your data will remain private and is used only to verify relationships. We'll guide you through each step of the process.
      </p>
      
      <Button 
        onClick={onStart}
        className="bg-ninja-primary hover:bg-ninja-primary/90"
      >
        Start Now
      </Button>
    </div>
  );
};