import { useState } from 'react';
import { VerificationOverview } from '@/components/family/VerificationOverview';
import { FamilyMember } from '@/types/family';

const FamilyVerification = () => {
  // This would typically come from your data store
  const [unverifiedMembers] = useState<FamilyMember[]>([
    {
      id: '1',
      name: 'John Doe',
      relationship: 'parent',
      isVerified: false,
    },
    {
      id: '2',
      name: 'Jane Doe',
      relationship: 'sibling',
      isVerified: false,
    },
  ]);

  return (
    <div className="min-h-screen bg-background py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-ninja-gray-900">Family Verification</h1>
          <p className="text-ninja-gray-600">
            Verify your family relationships by sending verification links or uploading documents
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {unverifiedMembers.map((member) => (
            <VerificationOverview key={member.id} member={member} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FamilyVerification;