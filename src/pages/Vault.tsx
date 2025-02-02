import { useNavigate } from 'react-router-dom';
import { accountData } from '@/data/accounts';
import { theme } from '@/config/theme';
import FamilyTreeComponent from '@/components/family/FamilyTree';
import AccountSummary from '@/components/vault/AccountSummary';
import PartnerOfferCard from '@/components/vault/PartnerOfferCard';
import type { FamilyTree } from '@/types/family';
import { Toaster } from '@/components/ui/sonner';
import { toast } from 'sonner';
import { Lock } from 'lucide-react';

const Vault = () => {
  const navigate = useNavigate();
  const accounts = accountData || [];

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

  const partnerOffers = [
    {
      id: '1',
      title: "Partner Offer #1",
      description: "Special discount on premium services with exclusive benefits for members.",
      validUntil: "Dec 2024",
      isActive: true,
    },
    {
      id: '2',
      title: "Partner Offer #2",
      description: "Special investment opportunities with reduced fees for members.",
      validUntil: "Jan 2025",
      isActive: true,
    },
    {
      id: '3',
      title: "Partner Offer #3",
      description: "Exclusive insurance coverage with special rates for members.",
      validUntil: "Mar 2025",
      isActive: false,
    },
  ];

  const handleNavigation = (path: string, message: string) => {
    toast(message);
    navigate(path);
  };

  return (
    <>
      <Toaster />
      <div className="min-h-[calc(100vh-4rem)]" style={{ backgroundColor: theme.colors.background }}>
        <div className="max-w-4xl mx-auto p-6 pt-8 pb-24">
          <AccountSummary 
            linkedAccounts={accounts.length}
            missingNominees={accounts.filter(a => !a.hasNominee).length}
            atRiskAccounts={accounts.filter(a => a.isDormant).length}
          />

          <div className="mb-4">
            <div className="relative w-full h-[400px] overflow-hidden">
              <div className="absolute w-[calc(340px*25)] flex flex-row items-center animate-infinite-scroll">
                {Array.from({ length: 25 }, (_, index) => {
                  const offer = partnerOffers[index % partnerOffers.length];
                  return (
                    <PartnerOfferCard
                      key={`${offer.id}-${index}`}
                      title={offer.title}
                      description={offer.description}
                      validUntil={offer.validUntil}
                      isActive={offer.isActive}
                    />
                  );
                })}
              </div>
            </div>
          </div>

          <div className="mb-4">
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

          {/* Locked sections */}
          <div className="space-y-4">
            <div className="p-6 rounded-lg bg-gray-50 border border-gray-200">
              <div className="flex items-center gap-3">
                <Lock className="text-gray-400" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-400">Discover Lost Accounts</h3>
                  <p className="text-sm text-gray-500">Complete family verification to unlock this feature</p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-lg bg-gray-50 border border-gray-200">
              <div className="flex items-center gap-3">
                <Lock className="text-gray-400" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-400">Finance Your Dreams</h3>
                  <p className="text-sm text-gray-500">Complete family verification to unlock this feature</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Vault;