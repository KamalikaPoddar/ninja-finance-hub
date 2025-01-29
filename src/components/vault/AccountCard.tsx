import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronDown, Link2, AlertTriangle, UserX } from 'lucide-react';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { useState } from 'react';
import { theme } from '@/config/theme';

interface AccountCardProps {
  account: {
    id: string;
    name: string;
    institutionName: string;
    accountType: string;
    accountNumber: string;
    balance: number;
    lastTransactionDate?: string;
    isConnected: boolean;
    isDormant?: boolean;
    hasNominee?: boolean;
  };
  onClick: () => void;
}

const AccountCard = ({ account, onClick }: AccountCardProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
<<<<<<< Updated upstream
    <Card className="w-full bg-white shadow-sm hover:shadow-md transition-shadow">
      <Collapsible open={isOpen} onOpenChange={setIsOpen}>
        <div className="flex items-center justify-between p-6" onClick={onClick}>
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
              <Link2 className="w-5 h-5 text-gray-500" />
            </div>
            <div>
              <CardTitle className="text-lg font-semibold text-gray-900">
                {account.name}
              </CardTitle>
              <p className="text-sm text-gray-500">
                {account.isConnected ? 'Connected' : 'Disconnected'}
              </p>
            </div>
=======
    <Card 
      className="hover:shadow-md transition-shadow cursor-pointer" 
      onClick={onClick}
      style={{ backgroundColor: theme.colors.surface }}
    >
      <CardHeader className="p-4">
        <div className="flex justify-between items-center">
          <CardTitle 
            className="text-lg"
            style={{ color: theme.colors.text.primary }}
          >
            {account.name}
          </CardTitle>
          
          {/* No Nominee button moved to top right */}
          {!account.hasNominee && (
            <Button 
              variant="outline" 
              size="sm" 
              className="h-8 px-2"
              style={{ 
                borderColor: theme.colors.primary,
                color: theme.colors.primary
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <UserX className="h-3 w-3 mr-1" />
              <span className="text-xs">No Nominee</span>
            </Button>
          )}
        </div>
      </CardHeader>
      
      <CardContent className="space-y-2 p-4 pt-0">
        {/* Account Type */}
        <p
          className="text-sm"
          style={{ color: theme.colors.text.secondary }}
        >
          Account Type: {account.accountType}
        </p>
      
        {/* Masked Account Number */}
        <p
          className="text-sm"
          style={{ color: theme.colors.text.secondary }}
        >
          Account Number: {account.accountNumber.replace(/.(?=.{4})/g, '*')}
        </p>
      
        {/* Balance */}
        <p
          className="text-2xl font-bold"
          style={{ color: theme.colors.text.primary }}
        >
          ₹{account.balance.toLocaleString()}
        </p>
      
        {/* Last Transaction Date */}
        {account.lastTransactionDate && (
          <div
            className="flex items-center gap-2 text-sm"
            style={{ color: theme.colors.text.secondary }}
          >
            <CalendarDays className="h-4 w-4" />
            <span>
              Last transaction: {new Date(account.lastTransactionDate).toLocaleDateString()}
            </span>
>>>>>>> Stashed changes
          </div>

          <div className="flex items-center gap-3">
            {!account.hasNominee && (
              <Button 
                variant="outline" 
                size="sm"
                className="h-8 border-red-200 text-red-600 hover:bg-red-50"
                onClick={(e) => {
                  e.stopPropagation();
                  // Handle nominee action
                }}
              >
                <UserX className="h-4 w-4 mr-2" />
                No Nominee
              </Button>
            )}
            
            <CollapsibleTrigger asChild>
              <Button variant="ghost" size="sm" className="h-8">
                <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isOpen ? 'transform rotate-180' : ''}`} />
              </Button>
            </CollapsibleTrigger>
          </div>
        </div>

        <CollapsibleContent>
          <CardContent className="px-6 pb-6 pt-0">
            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-500">Balance</p>
                <p className="text-2xl font-semibold text-gray-900">
                  ₹{account.balance.toLocaleString()}
                </p>
              </div>

              {account.lastTransactionDate && (
                <div>
                  <p className="text-sm text-gray-500">Last Transaction</p>
                  <p className="text-sm text-gray-900">
                    {new Date(account.lastTransactionDate).toLocaleDateString()}
                  </p>
                </div>
              )}

              <div className="flex gap-2 pt-2">
                {!account.isConnected && (
                  <Button 
                    variant="outline"
                    size="sm"
                    className="border-red-200 text-red-600 hover:bg-red-50"
                    onClick={(e) => {
                      e.stopPropagation();
                      // Handle reauthorization
                    }}
                  >
                    <Link2 className="h-4 w-4 mr-2" />
                    Reauthorize
                  </Button>
                )}

                {account.isDormant && (
                  <Button 
                    variant="outline"
                    size="sm"
                    className="border-amber-200 text-amber-600 hover:bg-amber-50"
                  >
                    <AlertTriangle className="h-4 w-4 mr-2" />
                    Dormant
                  </Button>
                )}
              </div>
            </div>
          </CardContent>
        </CollapsibleContent>
      </Collapsible>
    </Card>
  );
};

export default AccountCard;