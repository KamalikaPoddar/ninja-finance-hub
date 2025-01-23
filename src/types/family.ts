export interface FamilyMember {
  id: string;
  name: string;
  relationship: 'parent' | 'self' | 'spouse' | 'sibling' | 'child';
  dateOfBirth?: string;
  isVerified?: boolean;
}

export interface FamilyTree {
  parents: FamilyMember[];
  self: FamilyMember;
  spouse?: FamilyMember;
  siblings: FamilyMember[];
  children: FamilyMember[];
}