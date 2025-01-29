import { sampleAccounts } from '@/data/accounts';
import AccountCard from '@/components/vault/AccountCard';

export const Account = () => {
  console.log('Rendering Account Component');
  console.log('Sample Accounts:', sampleAccounts);

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#f3f4f6' }}>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold mb-8" style={{ color: '#1f2937' }}>
          Your Linked Accounts
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sampleAccounts.length > 0 ? (
            sampleAccounts.map((account) => (
              <AccountCard
                key={account.id}
                account={{
                  id: account.id,
                  name: account.name,
                  institutionName: account.institutionName,
                  accountType: account.accountType,
                  accountNumber: account.accountNumber,
                  balance: account.balance,
                  lastTransactionDate: account.lastTransactionDate,
                  isConnected: true,
                  isDormant: account.isDormant,
                  hasNominee: account.hasNominee,
                }}
                onClick={() => console.log('View Details:', account.id)}
              />
            ))
          ) : (
            <p>Looks a little Empty. Add your first account</p>
          )}
        </div>
      </main>
    </div>
  );
};