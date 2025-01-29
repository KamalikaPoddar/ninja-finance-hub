export interface Account {
  id: string;
  name: string;
  institutionName: string;
  accountType: string;
  accountNumber: string;
  accountHoldername?: string;
  balance: number;
  lastTransactionDate?: string;
  lastUpdated?: string;
  isConnected: boolean;
  isDormant?: boolean;
  hasNominee?: boolean;
  isFamilyVerified?: boolean;
  nominee?: string;
  daysToDormancy?: number;
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