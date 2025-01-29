export interface Account {
  id: string;
  name: string;
  accountType: string;
  accountNumber: string;
  accountHoldername: string;
  balance: number;
  lastTransactionDate: string;
  isConnected: boolean;
  isDormant: boolean;
  hasNominee: boolean;
  nominee?: string;
  daysToDormancy?: number;
  isFamilyVerified?: boolean;
  lastUpdated?: string;
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