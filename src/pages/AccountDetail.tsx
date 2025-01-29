import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Header } from '@/components/layout/Header';
import { ArrowLeft, AlertTriangle, User, FileSignature, X } from 'lucide-react';
import { theme } from '@/config/theme';
import { Account } from '@/types/account';
import { accountData } from '@/data/accounts';

const AccountDetail = () => {
  const { accountId } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();

  const account = accountData.find(acc => acc.id === accountId);

  if (!account) {
    return (
      <div className="min-h-screen" style={{ backgroundColor: theme.colors.background }}>
        <Header />
        <div className="max-w-2xl mx-auto p-6 pt-24">
          <p style={{ color: theme.colors.text.primary }}>
            Account not found
          </p>
        </div>
      </div>
    );
  }

  const handleRemoveAccount = () => {
    // TODO: Implement account removal logic
    toast({
      title: 'Account Removed',
      description: 'The account has been successfully removed',
    });
    navigate('/vault');
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: theme.colors.background }}>
      <Header />
      <div className="max-w-2xl mx-auto p-6 pt-24">
        <div className="flex items-center gap-4 mb-6">
          <button
            onClick={() => navigate('/vault')}
            className="p-2 rounded-full hover:bg-gray-100 transition-colors"
            style={{ color: theme.colors.text.primary }}
          >
            <X className="h-5 w-5" />
          </button>
          <h1 
            className="text-2xl font-bold"
            style={{ color: theme.colors.text.primary }}
          >
            {account.name}
          </h1>
        </div>
        
        <Card style={{ backgroundColor: theme.colors.surface }}>
          <CardHeader>
            <CardTitle style={{ color: theme.colors.text.primary }}>
              Account Details
            </CardTitle>
            <p 
              className="text-sm"
              style={{ color: theme.colors.text.secondary }}
            >
              Last updated: {account.lastUpdated}
            </p>
          </CardHeader>
          
          <CardContent className="space-y-4">
            {/* Balance */}
            <div>
              <h3 
                className="font-medium"
                style={{ color: theme.colors.text.primary }}
              >
                Balance
              </h3>
              <p 
                className="text-2xl font-bold"
                style={{ color: theme.colors.text.primary }}
              >
                ₹{account.balance.toLocaleString()}
              </p>
            </div>

            {/* Dormancy Warning */}
            {account.daysToDormancy && account.daysToDormancy <= 30 && (
              <div 
                className="flex items-center gap-2"
                style={{ color: theme.colors.warning }}
              >
                <AlertTriangle className="h-4 w-4" />
                <span>
                  Account may become dormant in {account.daysToDormancy} days
                </span>
              </div>
            )}

            {/* Nominee Information */}
            <div>
              <h3 
                className="font-medium"
                style={{ color: theme.colors.text.primary }}
              >
                Nominee Information
              </h3>
              <div 
                className="flex items-center gap-2"
                style={{ color: theme.colors.text.secondary }}
              >
                <User className="h-4 w-4" />
                <span>{account.nominee}</span>
              </div>
              <Button 
                variant="link" 
                className="p-0"
                style={{ color: theme.colors.primary }}
              >
                Update Nominee
              </Button>
            </div>

            {/* Recent Transactions */}
            <div>
              <h3 
                className="font-medium mb-2"
                style={{ color: theme.colors.text.primary }}
              >
                Recent Transactions
              </h3>
              <div className="space-y-2">
                {account.recentTransactions.map((transaction, index) => (
                  <div 
                    key={index} 
                    className="flex justify-between"
                    style={{ color: theme.colors.text.primary }}
                  >
                    <div>
                      <p>{transaction.description}</p>
                      <p 
                        className="text-sm"
                        style={{ color: theme.colors.text.secondary }}
                      >
                        {new Date(transaction.date).toLocaleDateString()}
                      </p>
                    </div>
                    <p 
                      style={{ 
                        color: transaction.amount > 0 
                          ? theme.colors.success 
                          : theme.colors.error
                      }}
                    >
                      ₹{Math.abs(transaction.amount).toLocaleString()}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* eSign Forms */}
            <div>
              <h3 
                className="font-medium"
                style={{ color: theme.colors.text.primary }}
              >
                eSign Forms
              </h3>
              <Button 
                variant="outline" 
                className="gap-2"
                style={{ 
                  borderColor: theme.colors.primary,
                  color: theme.colors.primary
                }}
              >
                <FileSignature className="h-4 w-4" />
                View eSign Documents
              </Button>
            </div>
          </CardContent>

          <CardFooter className="flex justify-end">
            <Button
              variant="outline"
              style={{
                borderColor: theme.colors.primary,
                color: theme.colors.primary
              }}
              onClick={handleRemoveAccount}
            >
              Remove
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default AccountDetail;
