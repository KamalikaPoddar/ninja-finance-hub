import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import AccountCard from '@/components/vault/AccountCard';
import { Header } from '@/components/layout/Header';
import { Lock } from 'lucide-react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { theme } from '@/config/theme';

const Vault = () => {
  const navigate = useNavigate();

  // TODO: Fetch accounts from API
  const accounts = [
    {
      id: '1',
      name: 'Bank One',
      balance: 10000,
      lastTransactionDate: '2025-01-15',
      isConnected: true,
      isDormant: false,
      hasNominee: true,
      isFamilyVerified: false // TODO: Set based on actual verification
    }
  ];

  const isFamilyVerified = accounts[0].isFamilyVerified;

  return (
    <div className="min-h-screen" style={{ backgroundColor: theme.colors.background }}>
      <Header />
      <div className="max-w-4xl mx-auto p-6 pt-24">
        {/* Your Accounts Section */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold" style={{ color: theme.colors.text.primary }}>
              Your Accounts
            </h1>
            <Button 
              style={{ 
                backgroundColor: theme.colors.primary,
                color: theme.colors.surface
              }}
              onClick={() => navigate('/consent')}
            >
              Add Account
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {accounts.map(account => (
              <AccountCard
                key={account.id}
                account={account}
                onClick={() => navigate(`/account/${account.id}`)}
              />
            ))}
          </div>
        </div>

        {/* Your Family Tree Section */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold" style={{ color: theme.colors.text.primary }}>
              Your Family Tree
            </h1>
            <Button 
              style={{ 
                backgroundColor: theme.colors.primary,
                color: theme.colors.surface
              }}
              onClick={() => {
                // TODO: Implement family management navigation
              }}
            >
              Manage Family
            </Button>
          </div>

          <div 
            className="p-6 rounded-lg" 
            style={{ backgroundColor: theme.colors.surface }}
          >
            <p className="text-center" style={{ color: theme.colors.text.secondary }}>
              Family tree functionality coming soon
            </p>
          </div>
        </div>

        {/* Discover Lost Assets Section */}
        <div>
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold" style={{ color: theme.colors.text.primary }}>
              Discover Lost Assets
            </h1>
            {!isFamilyVerified && (
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <div 
                      className="flex items-center gap-2"
                      style={{ color: theme.colors.primary }}
                    >
                      <Lock className="h-5 w-5" />
                      <span>Locked</span>
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>This feature is only available after completing family verification</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            )}
          </div>

          <div 
            className="p-6 rounded-lg" 
            style={{ 
              backgroundColor: isFamilyVerified 
                ? theme.colors.primary + '1A' // Add opacity
                : theme.colors.surface
            }}
          >
            {isFamilyVerified ? (
              <div className="text-center">
                <p 
                  className="mb-4"
                  style={{ color: theme.colors.primary }}
                >
                  Unlock the power to discover lost assets
                </p>
                <Button 
                  style={{ 
                    backgroundColor: theme.colors.primary,
                    color: theme.colors.surface
                  }}
                >
                  Discover Assets
                </Button>
              </div>
            ) : (
              <p 
                className="text-center" 
                style={{ color: theme.colors.text.secondary }}
              >
                Complete family verification to unlock this feature
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vault;
