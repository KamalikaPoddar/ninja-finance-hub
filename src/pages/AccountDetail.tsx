import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Header } from '@/components/layout/Header';
import { ArrowLeft, AlertTriangle, User, FileSignature } from 'lucide-react';

const AccountDetail = () => {
  const { accountId } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();

  // TODO: Fetch account details using accountId
  const account = {
    name: 'Sample Account',
    balance: 10000,
    lastUpdated: new Date().toLocaleString(),
    isActive: true,
    nominee: 'John Doe',
    daysToDormancy: 15,
    recentTransactions: [
      { date: '2025-01-15', amount: -500, description: 'Grocery Store' },
      { date: '2025-01-10', amount: 2000, description: 'Salary' }
    ]
  };

  const handleRemoveAccount = () => {
    // TODO: Implement account removal logic
    toast({
      title: 'Account Removed',
      description: 'The account has been successfully removed',
    });
    navigate('/vault');
  };

  return (
    <div className="min-h-screen">
      <Header />
      <div className="max-w-2xl mx-auto p-6 pt-24">
        <div className="flex items-center gap-4 mb-6">
          <Button variant="ghost" size="icon" onClick={() => navigate(-1)}>
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <h1 className="text-2xl font-bold">{account.name}</h1>
        </div>
        
        <Card>
          <CardHeader>
            <CardTitle>Account Details</CardTitle>
            <p className="text-sm text-gray-500">Last updated: {account.lastUpdated}</p>
          </CardHeader>
          
          <CardContent className="space-y-4">
            {/* Balance */}
            <div>
              <h3 className="font-medium">Balance</h3>
              <p className="text-2xl font-bold">
                ₹{account.balance.toLocaleString()}
              </p>
            </div>

            {/* Dormancy Warning */}
            {account.daysToDormancy && account.daysToDormancy <= 30 && (
              <div className="flex items-center gap-2 text-yellow-600">
                <AlertTriangle className="h-4 w-4" />
                <span>
                  Account may become dormant in {account.daysToDormancy} days
                </span>
              </div>
            )}

            {/* Nominee Information */}
            <div>
              <h3 className="font-medium">Nominee Information</h3>
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>{account.nominee}</span>
              </div>
              <Button variant="link" className="p-0">
                Update Nominee
              </Button>
            </div>

            {/* Recent Transactions */}
            <div>
              <h3 className="font-medium mb-2">Recent Transactions</h3>
              <div className="space-y-2">
                {account.recentTransactions.map((transaction, index) => (
                  <div key={index} className="flex justify-between">
                    <div>
                      <p>{transaction.description}</p>
                      <p className="text-sm text-gray-500">
                        {new Date(transaction.date).toLocaleDateString()}
                      </p>
                    </div>
                    <p className={transaction.amount > 0 ? 'text-green-600' : 'text-red-600'}>
                      ₹{Math.abs(transaction.amount).toLocaleString()}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* eSign Forms */}
            <div>
              <h3 className="font-medium">eSign Forms</h3>
              <Button variant="outline" className="gap-2">
                <FileSignature className="h-4 w-4" />
                View eSign Documents
              </Button>
            </div>
          </CardContent>

          <CardFooter className="flex justify-end">
            <Button variant="destructive" onClick={handleRemoveAccount}>
              Remove Account
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default AccountDetail;