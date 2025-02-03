import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { UserCheck, UserX, AlertTriangle, Building2 } from 'lucide-react';
import { theme } from '@/config/theme';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Account } from '@/types/account'; 


// In AccountCard.tsx
interface AccountCardProps {
  account: Account; // Use the actual Account type
  onClick: () => void;
}

const AccountCard = ({ account, onClick }: AccountCardProps) => {
  // Function to mask account number
  const maskAccountNumber = (accountNumber: string) => {
    const lastFour = accountNumber.slice(-4);
    return `${'*'.repeat(10)}${lastFour}`;
  };

  return (
    <Card 
      className="hover:shadow-md transition-shadow cursor-pointer rounded-xl" 
      onClick={onClick}
      style={{ backgroundColor: theme.colors.surface }}
    >
      <CardHeader className="p-4">
        <div className="flex justify-between items-start">
          <div className="space-y-1">
            <CardTitle 
              className="text-xl font-bold"
              style={{ color: theme.colors.text.primary }}
            >
              {account.institutionName}
            </CardTitle>
            <p 
              className="text-sm"
              style={{ color: theme.colors.text.secondary }}
            >
              {account.accountType}
            </p>
            <p 
              className="text-base font-medium mt-2"
              style={{ color: theme.colors.text.primary }}
            >
              {account.name}
            </p>
          </div>
          
          <TooltipProvider>
            <div className="flex gap-2">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button 
                    variant="ghost" 
                    size="icon"
                    className={account.hasNominee ? "bg-purple-50" : "bg-red-50"}
                    style={{ 
                      color: account.hasNominee ? theme.colors.primary : theme.colors.error 
                    }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    {account.hasNominee ? (
                      <UserCheck className="h-4 w-4" />
                    ) : (
                      <UserX className="h-4 w-4" />
                    )}
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  {account.hasNominee ? 
                    "Nominee registered" : 
                    "No nominee registered for this account"
                  }
                </TooltipContent>
              </Tooltip>

              {account.isDormant && (
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button 
                      variant="ghost" 
                      size="icon"
                      className="h-8 w-8 rounded-full bg-amber-50"
                      style={{ color: theme.colors.warning }}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <AlertTriangle className="h-4 w-4" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    Account at risk of becoming dormant
                  </TooltipContent>
                </Tooltip>
              )}

              <Tooltip>
                <TooltipTrigger asChild>
                  <Button 
                    variant="ghost" 
                    size="icon"
                    className={account.isFamilyVerified ? "bg-purple-50" : "bg-blue-50"}
                    style={{ 
                      color: account.isFamilyVerified ? theme.colors.primary : theme.colors.info 
                    }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Building2 className="h-4 w-4" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  {account.isFamilyVerified ? 
                    "Family verified" : 
                    "Family verification pending"
                  }
                </TooltipContent>
              </Tooltip>
            </div>
          </TooltipProvider>
        </div>
      </CardHeader>
      
      <CardContent className="p-4 pt-0 space-y-4">
        <div className="space-y-1">
          <p 
            className="text-sm"
            style={{ color: theme.colors.text.secondary }}
          >
            Account Number
          </p>
          <p 
            className="text-base font-medium"
            style={{ color: theme.colors.text.primary }}
          >
            {maskAccountNumber(account.accountNumber)}
          </p>
        </div>
        
        <div className="space-y-1">
          <p 
            className="text-sm"
            style={{ color: theme.colors.text.secondary }}
          >
            Balance
          </p>
          <p 
            className="text-2xl font-bold"
            style={{ color: theme.colors.text.primary }}
          >
            ₹{account.balance.toLocaleString()}
          </p>
        </div>
        
        {account.lastTransactionDate && (
          <div className="flex items-center justify-between pt-2 border-t" style={{ borderColor: theme.colors.border }}>
            <p 
              className="text-sm"
              style={{ color: theme.colors.text.secondary }}
            >
              Last Transaction
            </p>
            <p 
              className="text-sm font-medium"
              style={{ color: theme.colors.text.primary }}
            >
              {new Date(account.lastTransactionDate).toLocaleDateString('en-IN', {
                day: '2-digit',
                month: 'short',
                year: 'numeric'
              })}
            </p>
          </div>
        )}
        
        {!account.isConnected && (
          <div className="flex justify-center pt-2">
            <Button 
              variant="outline" 
              size="sm" 
              className="w-full"
              style={{ 
                borderColor: theme.colors.error,
                color: theme.colors.error
              }}
              onClick={(e) => {
                e.stopPropagation();
                // TODO: Handle reauthorise
              }}
            >
              Reauthorise Account
            </Button>
          </div>
        )}
      </CardContent>
      
      <CardFooter className="flex justify-between p-4">
        {!account.isConnected && (
          <Button 
            variant="outline" 
            size="sm" 
            className="h-8 px-2"
            style={{ 
              borderColor: theme.colors.error,
              color: theme.colors.error
            }}
            onClick={(e) => {
              e.stopPropagation();
              // TODO: Handle reauthorise
            }}
          >
            <Link2 className="h-3 w-3 mr-1" />
            <span className="text-xs">Reauthorise</span>
          </Button>
        )}
        
        <div className="flex gap-2">
          {account.isDormant && (
            <Button 
              variant="outline" 
              size="sm" 
              className="h-8 px-2"
              style={{ 
                borderColor: theme.colors.error,
                color: theme.colors.error
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <AlertTriangle className="h-3 w-3 mr-1" />
              <span className="text-xs">Dormant</span>
            </Button>
          )}
        </div>
      </CardFooter>
    </Card>
  );
};

export default AccountCard;