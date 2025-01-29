import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CalendarDays, Link2, AlertTriangle, UserX } from 'lucide-react';
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
    isFamilyVerified?: boolean;
  };
  onClick: () => void;
}

const AccountCard = ({ account, onClick }: AccountCardProps) => {
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
        {/* Institution Name */}
        <p 
          className="text-sm"
          style={{ color: theme.colors.text.secondary }}
        >
          Institution: {account.institutionName}
        </p>
        
        {/* Account Type */}
        <p 
          className="text-sm"
          style={{ color: theme.colors.text.secondary }}
        >
          Account Type: {account.accountType}
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
          </div>
        )}
        
        {/* Family Verification */}
        <div className="flex items-center gap-2 text-sm">
          <span>Family Verification:</span>
          {account.isFamilyVerified ? (
            <span className="text-green-600">Verified</span>
          ) : (
            <span className="text-yellow-600">Not Verified</span>
          )}
        </div>
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