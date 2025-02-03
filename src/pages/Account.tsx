import { Header } from '@/components/layout/Header';
import { theme } from '@/config/theme';
import { accountData } from '@/data/accounts';
import AccountCard from '@/components/account/AccountCard';
import { format } from 'date-fns';
import { Check, X, AlertCircle } from 'lucide-react';

{accountData.map((account) => (
  <AccountCard
    key={account.id}
    account={account}
    onClick={() => handleAccountClick(account.id)}
  />
))}

// In account.ts
export interface Account {
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
  // Additional fields NOT in AccountCardProps:
  daysToDormancy?: number;
  accountHoldername?: string;
  recentTransactions?: Transaction[];
}

export const Account = () => {
  const handleAccountClick = (accountId: string) => {
    // TODO: Handle account click, e.g., navigate to account details
    console.log('Account clicked:', accountId);
  };

  console.log('Account data:', accountData);
  return (
    <div className="min-h-screen" style={{ backgroundColor: theme.colors.background }}>
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold mb-8" style={{ color: theme.colors.text.primary }}>
          Your Linked Accounts
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {accountData.map((account) => (
            <AccountCard
              key={account.id}
              account={account}
              onClick={() => handleAccountClick(account.id)}
            />
          ))}
        </div>
      </main>
    </div>
  );
};
