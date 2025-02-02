import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, DollarSign } from 'lucide-react';
import { accountData } from '@/data/accounts';
import { theme } from '@/config/theme';
import FamilyTreeComponent from '@/components/family/FamilyTree';
import AccountSummary from '@/components/vault/AccountSummary';
import PartnerOfferCard from '@/components/vault/PartnerOfferCard';
import type { FamilyTree } from '@/types/family';
import { toast } from 'sonner';

const partnerOffers = [
  {
    title: "Partner Offer #1",
    description: "Special discount on premium services with exclusive benefits for members.",
    validUntil: "Dec 2024",
    isActive: true,
  },
  {
    title: "Partner Offer #2",
    description: "Special investment opportunities with reduced fees for members.",
    validUntil: "Jan 2025",
    isActive: true,
  },
  {
    title: "Partner Offer #3",
    description: "Exclusive insurance coverage with special rates for members.",
    validUntil: "Mar 2025",
    isActive: false,
  },
];

const Vault = () => {
  console.log('Rendering Vault component');
  const navigate = useNavigate();
  const accounts = accountData;
  console.log('Accounts data:', accounts);

  // Ensure we have at least one account before accessing index 0
  const isFamilyVerified = accounts.length > 0 ? accounts[0].isFamilyVerified : false;
  console.log('Family verification status:', isFamilyVerified);

  const [familyData] = useState<FamilyTree>({
    parents: [
      { id: '1', name: 'John Doe', relationship: 'parent', isVerified: true },
      { id: '2', name: 'Jane Doe', relationship: 'parent', isVerified: false }
    ],
    self: { id: '3', name: 'You', relationship: 'self', isVerified: true },
    siblings: [
      { id: '4', name: 'Jack Doe', relationship: 'sibling', isVerified: false }
    ],
    spouse: { id: '5', name: 'Sarah Doe', relationship: 'spouse', isVerified: true },
    children: [
      { id: '6', name: 'Jimmy Doe', relationship: 'child', isVerified: false }
    ]
  });

  const handleNavigation = (path: string, message: string) => {
    console.log(`Navigating to: ${path}`);
    toast.info(message);
    // For now, we'll prevent navigation since these routes don't exist
    // navigate(path);
  };

  return (
    <div className="min-h-[calc(100vh-4rem)]" style={{ backgroundColor: theme.colors.background }}>
      <div className="max-w-4xl mx-auto p-6 pt-8 pb-24">
        {/* Account Summary */}
        <AccountSummary 
          linkedAccounts={accounts.length}
          missingNominees={accounts.filter(a => !a.hasNominee).length}
          atRiskAccounts={accounts.filter(a => a.isDormant).length}
        />

        {/* Quick Actions Section */}
        <div className="grid grid-cols-2 gap-6 mb-8 mt-8">
          {/* Discover Lost Accounts Card */}
          <div 
            className="p-6 rounded-xl bg-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl cursor-pointer"
            onClick={() => handleNavigation('/discover-accounts', 'Feature coming soon: Discover Lost Accounts')}
          >
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-full bg-violet-50">
                <Search className="w-6 h-6 text-violet-500" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-1">Discover Lost Accounts</h3>
                <p className="text-gray-500 text-sm">Find forgotten accounts and assets</p>
              </div>
            </div>
          </div>

          {/* Finance Your Dream Card */}
          <div 
            className="p-6 rounded-xl bg-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl cursor-pointer"
            onClick={() => handleNavigation('/finance-dream', 'Feature coming soon: Finance Your Dream')}
          >
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-full bg-violet-50">
                <DollarSign className="w-6 h-6 text-violet-500" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-1">Finance Your Dream</h3>
                <p className="text-gray-500 text-sm">Explore financing options</p>
              </div>
            </div>
          </div>
        </div>

        {/* Partner Offers Section */}
        <div className="mb-8">
          <div className="relative w-full h-[400px] overflow-hidden">
            <div className="absolute w-[calc(340px*25)] flex flex-row items-center animate-infinite-scroll">
              {Array.from({ length: 25 }, (_, index) => {
                const offer = partnerOffers[index % partnerOffers.length];
                return (
                  <PartnerOfferCard
                    key={`partner-offer-${index}`}
                    {...offer}
                  />
                );
              })}
            </div>
          </div>
        </div>

        {/* Family Tree Section */}
        <div className="mb-8 mt-8">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold" style={{ color: theme.colors.text.primary }}>
              Your Family 
            </h1>
          </div>

          <div 
            className="p-6 rounded-lg" 
            style={{ backgroundColor: theme.colors.surface }}
          >
            <FamilyTreeComponent family={familyData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vault;