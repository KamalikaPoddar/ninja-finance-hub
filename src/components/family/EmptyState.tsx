import { Button } from "@/components/ui/button";
import { UserPlus } from "lucide-react";

interface EmptyStateProps {
  onStart: () => void;
}

export const EmptyState = ({ onStart }: EmptyStateProps) => {
  return (
    <div className="text-center py-12 px-4 border-2 border-dashed border-ninja-gray-200 rounded-lg">
      <UserPlus className="mx-auto h-12 w-12 text-ninja-gray-400" />
      <h3 className="mt-4 text-lg font-medium text-ninja-gray-900">
        No Family Members Added
      </h3>
      <p className="mt-2 text-sm text-ninja-gray-600">
        Start building your family tree by adding your first family member.
      </p>
      <Button
        onClick={onStart}
        className="mt-6"
      >
        Add Family Member
      </Button>
    </div>
  );
};