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
  daysToDormancy?: number;
  accountType?: string;
  accountNumber?: string;
  accountHoldername?: string;
  recentTransactions?: {
    date: string;
    amount: number;
    description: string;
  }[];
}

export interface Institution {
  id: string;
  name: string;
  logoUrl?: string;
}