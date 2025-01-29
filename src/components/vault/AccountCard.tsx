import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronDown, Link2, AlertTriangle, UserX, CalendarDays, Plug } from 'lucide-react';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { useState } from 'react';

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
    <Card className="w-full bg-white shadow-sm hover:shadow-md transition-shadow">
      <Collapsible open={isOpen} onOpenChange={setIsOpen}>
        <div className="flex items-center justify-between p-6">
          <div className="flex items-center gap-4">
            <div className="p-2 bg-ninja-primary/10 rounded-lg">
              <Plug className="h-6 w-6 text-ninja-primary" />
            </div>
            <div>
              <CardTitle className="text-lg font-semibold text-gray-900">
                {account.name}
              </CardTitle>
              <p className="text-sm text-gray-500">
                {account.accountType}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <CollapsibleTrigger asChild>
              <Button variant="ghost" size="sm" className="gap-2">
                Learn more <ChevronDown className="h-4 w-4" />
              </Button>
            </CollapsibleTrigger>
            
            <Button 
              variant="default"
              size="sm"
              className="gap-2 bg-gray-900 hover:bg-gray-800"
              onClick={(e) => {
                e.stopPropagation();
                onClick();
              }}
            >
              <Plug className="h-4 w-4" />
              Connect
            </Button>
          </div>
        </div>

        <CollapsibleContent>
          <CardContent className="border-t pt-4">
            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-500">Account Number</p>
                <p className="font-medium">
                  {account.accountNumber.replace(/.(?=.{4})/g, '*')}
                </p>
              </div>

              <div>
                <p className="text-sm text-gray-500">Balance</p>
                <p className="text-xl font-semibold">
                  ₹{account.balance.toLocaleString()}
                </p>
              </div>

              {account.lastTransactionDate && (
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <CalendarDays className="h-4 w-4" />
                  <span>
                    Last transaction: {new Date(account.lastTransactionDate).toLocaleDateString()}
                  </span>
                </div>
              )}

              {!account.hasNominee && (
                <div className="flex items-center gap-2 text-amber-600">
                  <UserX className="h-4 w-4" />
                  <span className="text-sm">No nominee assigned</span>
                </div>
              )}

              {!account.isConnected && (
                <Button 
                  variant="outline"
                  size="sm"
                  className="w-full border-red-200 text-red-600 hover:bg-red-50"
                  onClick={(e) => {
                    e.stopPropagation();
                    // Handle reauthorization
                  }}
                >
                  <Link2 className="h-4 w-4 mr-2" />
                  Reauthorize Connection
                </Button>
              )}

              {account.isDormant && (
                <div className="flex items-center gap-2 text-amber-600">
                  <AlertTriangle className="h-4 w-4" />
                  <span className="text-sm">Account is dormant</span>
                </div>
              )}
            </div>
          </CardContent>
        </CollapsibleContent>
      </Collapsible>
    </Card>
  );
};

export default AccountCard;