import { Button } from "@/components/ui/button";
import { Tag } from "lucide-react";

interface PartnerOfferProps {
  title: string;
  description: string;
  validUntil: string;
  isActive?: boolean;
}

const PartnerOfferCard = ({ title, description, validUntil, isActive = true }: PartnerOfferProps) => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm min-w-[300px] mx-2">
      <div className="flex items-start justify-between mb-4">
        <div className="bg-violet-50 p-2 rounded-full">
          <Tag className="h-5 w-5 text-ninja-primary" />
        </div>
        {isActive && (
          <span className="text-sm px-3 py-1 bg-green-50 text-green-600 rounded-full">
            Active
          </span>
        )}
      </div>
      
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 text-sm mb-4">{description}</p>
      <p className="text-sm text-gray-500 mb-4">Valid until {validUntil}</p>
      
      <Button 
        variant="secondary"
        className="w-full bg-ninja-primary text-white hover:bg-ninja-secondary"
      >
        View Offer
      </Button>
    </div>
  );
};

export default PartnerOfferCard;