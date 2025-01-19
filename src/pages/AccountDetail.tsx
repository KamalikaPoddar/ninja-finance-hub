import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Header } from '@/components/layout/Header';
import { ArrowLeft, AlertTriangle, User, FileSignature } from 'lucide-react';
import { theme } from '@/config/theme';
import { Account } from '@/types/account';

const AccountDetail = () => {
  const { accountId } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();

  // TODO: Fetch accounts from API
  const accounts: Account[] = [
    {
      id: '1',
      name: 'Bank One',
      balance: 10000,
      lastUpdated: new Date().toLocaleString(),
      isActive: true,
      nominee: 'John Doe',
      daysToDormancy: 15,
      recentTransactions: [
        { date: '2025-01-15', amount: -500, description: 'Grocery Store' },
        { date: '2025-01-10', amount: 2000, description: 'Salary' }
      ],
      isConnected: true,
      lastTransactionDate: '2025-01-15',
      isDormant: false,
      hasNominee: true
    },
    {
      id: '2',
      name: 'Bank Two',
      balance: 25000,
      lastUpdated: new Date().toLocaleString(),
      isActive: true,
      nominee: 'Jane Smith',
      daysToDormancy: 30,
      recentTransactions: [
        { date: '2025-01-12', amount: -1000, description: 'Rent' },
        { date: '2025-01-05', amount: 3000, description: 'Freelance Work' }
      ],
      isConnected: false,
      lastTransactionDate: '2024-12-20',
      isDormant: true,
      hasNominee: false
    },
    {
      id: '3',
      name: 'Bank Three',
      balance: 15000,
      lastUpdated: new Date().toLocaleString(),
      isActive: true,
      nominee: 'Alice Johnson',
      daysToDormancy: 45,
      recentTransactions: [
        { date: '2025-01-08', amount: -750, description: 'Utilities' },
        { date: '2025-01-02', amount: 1500, description: 'Investment Return' }
      ],
      isConnected: true,
      lastTransactionDate: '2025-01-10',
      isDormant: false,
      hasNominee: true
    }
  ];

  const account = accounts.find(acc => acc.id === accountId);

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
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => navigate(-1)}
            style={{ color: theme.colors.text.primary }}
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
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
              variant="destructive"
              style={{ 
                backgroundColor: theme.colors.error,
                color: theme.colors.surface
              }}
              onClick={handleRemoveAccount}
            >
              Remove Account
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default AccountDetail;