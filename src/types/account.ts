export type AccountType = "savings" | "checking" | "investment" | "credit";

export interface Account {
  id: string;
  institutionName: string;
  logoUrl?: string;
  balance: number;
  lastTransactionDate: string;
  nomineeStatus: "active" | "missing";
  isDormant: boolean;
  type: AccountType;
  isTokenExpired?: boolean;
  hasPartialInfo?: boolean;
}