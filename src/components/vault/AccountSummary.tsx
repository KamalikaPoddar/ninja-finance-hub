import { Button } from "@/components/ui/button";
import { Settings } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface AccountSummaryProps {
  linkedAccounts: number;
  missingNominees: number;
  atRiskAccounts: number;
}

const AccountSummary = ({ linkedAccounts, missingNominees, atRiskAccounts }: AccountSummaryProps) => {
  const navigate = useNavigate();

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm mb-6">
      <div className="flex justify-between items-start mb-6">
        <h2 className="text-2xl font-bold">Account Summary</h2>
        <Settings className="h-6 w-6 text-gray-400" />
      </div>

      <div className="grid grid-cols-3 gap-4 mb-6">
        <div>
          <p className="text-3xl font-bold">{linkedAccounts}</p>
          <p className="text-sm text-gray-600">Linked Accounts</p>
        </div>
        <div>
          <p className="text-3xl font-bold text-amber-500">{missingNominees}</p>
          <p className="text-sm text-gray-600">Missing Nominees</p>
        </div>
        <div>
          <p className="text-3xl font-bold text-red-500">{atRiskAccounts}</p>
          <p className="text-sm text-gray-600">At Risk of Dormancy</p>
        </div>
      </div>

      <div className="flex gap-4">
        <Button 
          className="flex-1 bg-ninja-primary text-white hover:bg-ninja-secondary"
          onClick={() => navigate('/add-account')}
        >
          Add Account
        </Button>
        <Button 
          variant="outline" 
          className="flex-1 border-ninja-primary text-ninja-primary hover:bg-ninja-primary/10"
          onClick={() => navigate('/vault/expanded')}
        >
          View Details
        </Button>
      </div>
    </div>
  );
};

export default AccountSummary;