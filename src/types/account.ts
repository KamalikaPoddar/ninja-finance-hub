export interface Account {
  id: string;
  name: string;
  balance: number;
  lastUpdated?: string;
  isActive?: boolean;
  nominee?: string;
  isConnected: boolean;
  lastTransactionDate?: string;
  isDormant?: boolean;
  hasNominee?: boolean;
  isFamilyVerified?: boolean;
}

export interface Institution {
  id: string;
  name: string;
  logoUrl?: string;
}