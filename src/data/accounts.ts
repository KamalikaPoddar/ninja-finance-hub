import { Account } from '@/types/account';

export const sampleAccounts: Account[] = [
  {
    id: '1',
    name: 'Bank One',
    balance: 10000,
    lastTransactionDate: '2025-01-15',
    isConnected: true,
    isDormant: false,
    hasNominee: true,
    isFamilyVerified: false
  },
  {
    id: '2',
    name: 'Bank Two',
    balance: 25000,
    lastTransactionDate: '2024-12-20',
    isConnected: false,
    isDormant: true,
    hasNominee: false
  },
  {
    id: '3',
    name: 'Bank Three',
    balance: 15000,
    lastTransactionDate: '2025-01-10',
    isConnected: true,
    isDormant: false,
    hasNominee: true
  }
];