import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronDown, Link2, AlertTriangle, UserX, CalendarDays } from 'lucide-react';
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
        <p
          className="text-sm"
          style={{ color: theme.colors.text.secondary }}
        >
          Account Type: {account.accountType}
        </p>
      
        <p
          className="text-sm"
          style={{ color: theme.colors.text.secondary }}
        >
          Account Number: {account.accountNumber.replace(/.(?=.{4})/g, '*')}
        </p>
      
        <p
          className="text-2xl font-bold"
          style={{ color: theme.colors.text.primary }}
        >
          ₹{account.balance.toLocaleString()}
        </p>
      
        {account.lastTransactionDate && (
          <div
            className="flex items-center gap-2 text-sm"
            style={{ color: theme.colors.text.secondary }}
          >
            <CalendarDays className="h-4 w-4" />
            <span>
              Last transaction: {new Date(account.lastTransactionDate).toLocaleDateString()}
            </span>
          </div>
        )}

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
      </CardContent>
    </Card>
  );
};

export default AccountCard;
