import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check, MoreVertical, Building2, AlertTriangle, Link2 } from 'lucide-react';
import { theme } from '@/config/theme';
import { useState } from 'react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { Account } from '@/types/account';

interface AccountCardProps {
  account: Account;
  onClick: () => void;
}

const AccountCard = ({ account, onClick }: AccountCardProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Card 
      className="w-full bg-white shadow-sm hover:shadow-md transition-shadow rounded-3xl overflow-hidden"
      onClick={onClick}
    >
      <Collapsible open={isOpen} onOpenChange={setIsOpen}>
        <div className="p-6 space-y-4">
          {/* Bank Name and Logo */}
          <div className="flex items-center gap-2">
            <Building2 className="h-6 w-6 text-ninja-primary" />
            <span className="text-xl font-semibold text-gray-900">
              {account.institutionName}
            </span>
          </div>

          {/* Account Holder & Verification */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="text-lg text-gray-700">
                {account.accountHoldername || 'Account Holder'}
              </span>
              {account.isFamilyVerified && (
                <div className="w-8 h-8 bg-purple-50 rounded-full flex items-center justify-center">
                  <Check className="h-4 w-4 text-ninja-primary" />
                </div>
              )}
            </div>
          </div>

          {/* Account Type */}
          <div className="text-lg text-gray-600">
            {account.accountType}
          </div>

          {/* Balance */}
          <div className="text-3xl font-bold text-gray-900">
            ₹{account.balance.toLocaleString('en-IN')}
          </div>

          {/* View Details Button & Menu */}
          <div className="flex items-center justify-between pt-4">
            <Button 
              variant="secondary"
              className="bg-purple-50 hover:bg-purple-100 text-ninja-primary rounded-full px-6"
              onClick={(e) => {
                e.stopPropagation();
                onClick();
              }}
            >
              View Details
            </Button>
            
            <CollapsibleTrigger asChild onClick={(e) => e.stopPropagation()}>
              <Button variant="ghost" size="icon" className="rounded-full">
                <MoreVertical className="h-5 w-5 text-gray-500" />
              </Button>
            </CollapsibleTrigger>
          </div>
        </div>

        <CollapsibleContent>
          <div className="px-6 pb-6 space-y-4 border-t border-gray-100 pt-4">
            {/* Additional Info */}
            {!account.isConnected && (
              <div className="flex items-center gap-2 text-red-600">
                <Link2 className="h-4 w-4" />
                <span>Reconnection Required</span>
              </div>
            )}
            
            {account.isDormant && (
              <div className="flex items-center gap-2 text-amber-600">
                <AlertTriangle className="h-4 w-4" />
                <span>Dormant Account</span>
              </div>
            )}

            {account.lastTransactionDate && (
              <div className="text-sm text-gray-600">
                Last Transaction: {new Date(account.lastTransactionDate).toLocaleDateString()}
              </div>
            )}
          </div>
        </CollapsibleContent>
      </Collapsible>
    </Card>
  );
};

export default AccountCard;