export type RelationType = 'parent' | 'self' | 'spouse' | 'sibling' | 'child';

export interface FamilyMember {
  id: string;
  name: string;
  relationship: RelationType;
  isVerified?: boolean;
  dateOfBirth?: string;
  email?: string;
}

export interface FamilyTree {
  parents: FamilyMember[];
  self: FamilyMember;
  spouse?: FamilyMember;
  siblings: FamilyMember[];
  children: FamilyMember[];
}