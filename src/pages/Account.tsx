import { Header } from '@/components/layout/Header';
<<<<<<< Updated upstream
import { theme } from '@/config/theme';
import { accountData } from '@/data/accounts';
import { format } from 'date-fns';
import { Check, X, AlertCircle } from 'lucide-react';
=======
import { sampleAccounts } from '@/data/accounts';
import AccountCard from '@/components/account/AccountCard';
>>>>>>> Stashed changes

export const Account = () => {
  console.log('Rendering Account Component');
  console.log('Sample Accounts:', sampleAccounts);

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#f3f4f6' }}>
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold mb-8" style={{ color: '#1f2937' }}>
          Your Linked Accounts
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
<<<<<<< Updated upstream
          {accountData.map((account) => (
            <div 
              key={account.id}
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-200"
            >
              {/* Header with Status Indicators */}
              <div className="p-6 border-b" style={{ borderColor: theme.colors.background }}>
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-lg font-semibold" style={{ color: theme.colors.text.primary }}>
                      {account.name}
                    </h3>
                    <p className="text-sm" style={{ color: theme.colors.text.secondary }}>
                      {account.accountType}
                    </p>
                    <p className="text-sm mt-1" style={{ color: theme.colors.text.secondary }}>
                      {account.accountHoldername}
                    </p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      account.hasNominee 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {account.hasNominee ? 'Nominee Added' : 'No Nominee'}
                    </span>
                    {account.isDormant && (
                      <span className="px-3 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                        Dormant
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Account Details */}
              <div className="p-6 space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm" style={{ color: theme.colors.text.secondary }}>
                    Account Number
                  </span>
                  <span className="text-sm font-medium" style={{ color: theme.colors.text.primary }}>
                    {account.accountNumber}
                  </span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-sm" style={{ color: theme.colors.text.secondary }}>
                    Balance
                  </span>
                  <span className="text-sm font-semibold" style={{ color: theme.colors.primary }}>
                    ₹{account.balance.toLocaleString('en-IN')}
                  </span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-sm" style={{ color: theme.colors.text.secondary }}>
                    Last Transaction
                  </span>
                  <span className="text-sm" style={{ color: theme.colors.text.primary }}>
                    {account.lastTransactionDate && format(new Date(account.lastTransactionDate), 'dd MMM yyyy')}
                  </span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-sm" style={{ color: theme.colors.text.secondary }}>
                    Family Verification
                  </span>
                  <span className="flex items-center gap-2">
                    {account.isFamilyVerified ? (
                      <Check className="h-4 w-4 text-green-600" />
                    ) : (
                      <AlertCircle className="h-4 w-4 text-yellow-600" />
                    )}
                  </span>
                </div>
              </div>

              {/* Footer */}
              <div 
                className="px-6 py-4 border-t flex justify-end"
                style={{ borderColor: theme.colors.background }}
              >
                <button 
                  className="text-sm font-medium hover:opacity-80 transition-opacity"
                  style={{ color: theme.colors.primary }}
                >
                  View Details →
                </button>
              </div>
            </div>
          ))}
=======
          {sampleAccounts.length > 0 ? (
            sampleAccounts.map((account) => {
              console.log('Rendering AccountCard for:', account.name);
              return (
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
              );
            })
          ) : (
            <p>Looks a little Empty. Add your first account</p>
          )}
>>>>>>> Stashed changes
        </div>
      </main>
    </div>
  );
};