import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Building2, MoreVertical, User, ClipboardCheck, Check, X, Link, AlertCircle } from 'lucide-react';
import { FamilyIcon } from '@/components/icons/FamilyIcon';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { Account } from '@/types/account';
import { useState } from 'react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

interface AccountCardProps {
  account: Account;
  onClick: () => void;
}

interface StatusIconProps {
  isPositive: boolean;
  Icon: typeof User | typeof ClipboardCheck | typeof FamilyIcon;
  tooltipText: string;
}

const StatusIcon = ({ isPositive, Icon, tooltipText }: StatusIconProps) => (
  <TooltipProvider>
    <Tooltip>
      <TooltipTrigger asChild>
        <div className={`relative w-8 h-8 ${isPositive ? 'bg-purple-50' : 'bg-orange-50'} rounded-full flex items-center justify-center cursor-help`}>
          <Icon className={`h-4 w-4 ${isPositive ? 'text-ninja-primary' : 'text-orange-400'}`} />
          {isPositive ? (
            <Check className="h-3 w-3 text-ninja-primary absolute -top-1 -right-1" />
          ) : (
            <X className="h-3 w-3 text-orange-400 absolute -top-1 -right-1" />
          )}
        </div>
      </TooltipTrigger>
      <TooltipContent>
        <p>{tooltipText}</p>
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
);

const AccountCard = ({ account, onClick }: AccountCardProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Card 
      className="w-full bg-white shadow-sm hover:shadow-md transition-shadow rounded-3xl overflow-hidden mb-4 last:mb-24"
      onClick={onClick}
    >
      <Collapsible open={isOpen} onOpenChange={setIsOpen}>
        <div className="p-6 space-y-4">
          {/* Bank Name and Logo */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="text-xl font-semibold text-ninja-primary">
                {account.institutionName}
              </span>
              <Building2 className="h-5 w-5 text-ninja-primary" />
            </div>
          </div>

          {/* Account Holder & Status Icons */}
          <div className="flex items-center justify-between">
            <span className="text-lg text-gray-700">
              {account.accountHoldername || 'Account Holder'}
            </span>
            <div className="flex gap-2">
              <StatusIcon 
                isPositive={!!account.hasNominee} 
                Icon={User} 
                tooltipText={account.hasNominee ? "Nominee Registered" : "No Nominee Registered"}
              />
              <StatusIcon 
                isPositive={!account.isDormant} 
                Icon={ClipboardCheck} 
                tooltipText={account.isDormant ? "Account is Dormant" : "Account is Active"}
              />
              <StatusIcon 
                isPositive={!!account.isFamilyVerified} 
                Icon={FamilyIcon} 
                tooltipText={account.isFamilyVerified ? "Family Verified" : "Family Not Verified"}
              />
            </div>
          </div>

          {/* Account Type & Balance */}
          <div className="bg-purple-50 p-4 rounded-2xl">
            <p className="text-ninja-primary mb-2">{account.accountType}</p>
            <p className="text-2xl font-bold text-gray-900">
              ₹{account.balance.toLocaleString('en-IN')}
            </p>
          </div>

          {/* View Details Button & Menu */}
          <div className="flex items-center justify-between">
            <Button 
              variant="secondary"
              className="bg-ninja-primary hover:bg-ninja-secondary text-white rounded-full px-6"
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
                <Link className="h-4 w-4" />
                <span>Reconnection Required</span>
              </div>
            )}
            
            {account.isDormant && (
              <div className="flex items-center gap-2 text-amber-600">
                <AlertCircle className="h-4 w-4" />
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