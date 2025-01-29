export interface Account {
  id: string;
  name: string;
  institutionName: string;
  accountType: string;
  balance: number;
  accountNumber: string;
  lastTransactionDate?: string;
  isConnected: boolean;
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