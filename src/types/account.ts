export interface Account {
  id: string;
  name: string;
  institutionName: string;
  accountType: string;
  accountNumber: string;
  balance: number;
  lastTransactionDate?: string;
  isConnected: boolean;
  isDormant?: boolean;
  hasNominee?: boolean;
  isFamilyVerified?: boolean;
  daysToDormancy?: number;
  lastUpdated?: string;
  nominee?: string | null;
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
  institutionType: string;
}