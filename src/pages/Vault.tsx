import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import AccountCard from '@/components/vault/AccountCard';
import { Lock, ChevronDown, ChevronUp } from 'lucide-react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { theme } from '@/config/theme';
import FamilyTreeComponent from '@/components/family/FamilyTree';
import type { FamilyTree } from '@/types/family';
import type { Account } from '@/types/account';

const Vault = () => {
  const navigate = useNavigate();
  const [isExpanded, setIsExpanded] = useState(false);

  const accounts: Account[] = [
    {
      id: '1',
      name: 'Bank One',
      balance: 10000,
      lastTransactionDate: '2025-01-15',
      isConnected: true,
      isDormant: false,
      hasNominee: true,
      isFamilyVerified: false
    },
    {
      id: '2',
      name: 'Bank Two',
      balance: 25000,
      lastTransactionDate: '2024-12-20',
      isConnected: false,
      isDormant: true,
      hasNominee: false
    },
    {
      id: '3',
      name: 'Bank Three',
      balance: 15000,
      lastTransactionDate: '2025-01-10',
      isConnected: true,
      isDormant: false,
      hasNominee: true
    }
  ];

  const familyTree: FamilyTree = {
    parents: [
      {
        id: '1',
        name: 'John Doe Sr.',
        relationship: 'parent',
        isVerified: true
      },
      {
        id: '2',
        name: 'Jane Doe',
        relationship: 'parent',
        isVerified: true
      }
    ],
    self: {
      id: '3',
      name: 'John Doe Jr.',
      relationship: 'self',
      isVerified: true
    },
    spouse: {
      id: '4',
      name: 'Mary Doe',
      relationship: 'spouse',
      isVerified: true
    },
    siblings: [
      {
        id: '5',
        name: 'Alice Doe',
        relationship: 'sibling',
        isVerified: true
      }
    ],
    children: [
      {
        id: '6',
        name: 'Baby Doe',
        relationship: 'child',
        isVerified: true
      }
    ]
  };

  const visibleAccounts = isExpanded ? accounts : [accounts[0]];
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
              onClick={() => navigate('/add-account')}
            >
              Add Account
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {visibleAccounts.map(account => (
              <AccountCard
                key={account.id}
                account={account}
                onClick={() => navigate(`/account/${account.id}`)}
              />
            ))}
          </div>

          <div className="mt-4 flex justify-center">
            {!isExpanded ? (
              <Button
                variant="outline"
                className="gap-2"
                style={{
                  borderColor: theme.colors.primary,
                  color: theme.colors.primary
                }}
                onClick={() => setIsExpanded(true)}
              >
                <ChevronDown className="h-4 w-4" />
                View all {accounts.length} accounts
              </Button>
            ) : (
              <Button
                variant="outline"
                className="gap-2"
                style={{
                  borderColor: theme.colors.primary,
                  color: theme.colors.primary
                }}
                onClick={() => setIsExpanded(false)}
              >
                <ChevronUp className="h-4 w-4" />
                Collapse
              </Button>
            )}
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
            <FamilyTreeComponent family={familyTree} />
          </div>
        </div>

        {/* Discover Lost Assets Section */}
        <div className="mb-8">
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

        {/* Consult Experts Section */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold" style={{ color: theme.colors.text.primary }}>
              Consult Experts
            </h1>
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
          </div>

          <div 
            className="p-6 rounded-lg" 
            style={{ backgroundColor: theme.colors.surface }}
          >
            <p className="text-center" style={{ color: theme.colors.text.secondary }}>
              Expert consultation functionality coming soon
            </p>
          </div>
        </div>

        {/* Finance Your Dreams Section */}
        <div>
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold" style={{ color: theme.colors.text.primary }}>
              Finance Your Dreams
            </h1>
          </div>

          <div 
            className="p-6 rounded-lg" 
            style={{ backgroundColor: theme.colors.surface }}
          >
            <p className="text-center" style={{ color: theme.colors.text.secondary }}>
              Dream financing functionality coming soon
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vault;
