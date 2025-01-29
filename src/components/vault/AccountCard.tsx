import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CalendarDays, Link2, AlertTriangle, Check, X, ChevronDown } from 'lucide-react';
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
      className="w-full bg-white shadow-sm hover:shadow-md transition-shadow"
      onClick={onClick}
      style={{ backgroundColor: theme.colors.surface }}
    >
      <Collapsible open={isOpen} onOpenChange={setIsOpen}>
        <div className="flex items-center justify-between p-6" onClick={onClick}>
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
              <Link2 className="w-5 h-5 text-gray-500" />
            </div>
            <div>
              <CardTitle 
                className="text-lg font-semibold"
                style={{ color: theme.colors.text.primary }}
              >
                {account.name}
              </CardTitle>
              <p className="text-sm" style={{ color: theme.colors.text.secondary }}>
                {account.isConnected ? 'Connected' : 'Disconnected'}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {/* Nomination Button */}
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
                <X className="h-4 w-4" />
              </Button>
            )}
            {account.hasNominee && (
              <Button 
                variant="outline" 
                size="sm"
                className="h-8 border-purple-200 text-purple-600 hover:bg-purple-50"
                onClick={(e) => {
                  e.stopPropagation();
                  // Handle nominee action
                }}
              >
                <Check className="h-4 w-4" />
              </Button>
            )}

            {/* Family Verification Icon */}
            <div className="flex items-center gap-2 text-sm mt-2">
              {account.isFamilyVerified ? (
                <Check className="h-4 w-4 text-green-600" />
              ) : (
                <AlertTriangle className="h-4 w-4 text-yellow-600" />
              )}
            </div>

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
                <p className="text-sm text-gray-500">Account Type</p>
                <p className="text-sm text-gray-900">
                  {account.accountType}
                </p>
              </div>

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