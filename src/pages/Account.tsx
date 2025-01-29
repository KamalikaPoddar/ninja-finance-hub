import { sampleAccounts } from '@/data/accounts';
import AccountCard from '@/components/vault/AccountCard';
import { useNavigate } from 'react-router-dom';

export const Account = () => {
  console.log('Rendering Account Component');
  console.log('Sample Accounts:', sampleAccounts);
  
  const navigate = useNavigate();

  const handleAccountClick = (accountId: string) => {
    navigate(`/account/${accountId}`);
  };

  return (
    <div className="min-h-screen bg-ninja-gray-100">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold mb-8 text-ninja-gray-900">
          Your Linked Accounts
        </h1>
        
        <div className="grid grid-cols-1 gap-6">
          {sampleAccounts.length > 0 ? (
            sampleAccounts.map((account) => (
              <AccountCard
                key={account.id}
                account={account}
                onClick={() => handleAccountClick(account.id)}
              />
            ))
          ) : (
            <p className="text-ninja-gray-600">
              Looks a little Empty. Add your first account
            </p>
          )}
        </div>
      </main>
    </div>
  );
};

export default Account;