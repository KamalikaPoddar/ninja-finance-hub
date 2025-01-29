import { Account } from '@/types/account';

export const accountData: Account[] = [
  {
    id: '1',
    name: 'SBI bank',
    accountType: 'Savings Account',
    accountNumber: '***********7890',
    accountHoldername: 'John Doe',
    balance: 10000,
    lastTransactionDate: '2025-01-15',
    isConnected: true,
    isDormant: false,
    hasNominee: true
  },
  {
    id: '2',
    name: 'HDFC Bank',
    accountType: 'Term Deposit',
    accountNumber: '***********7890',
    accountHoldername: 'John Doe',
    balance: 25000,
    lastTransactionDate: '2024-12-20',
    isConnected: false,
    isDormant: true,
    hasNominee: false
  },
  {
    id: '3',
    name: 'Axis Bank',
    accountType: 'Recurring Deposit',
    accountNumber: '***********7890',
    accountHoldername: 'John Doe',
    balance: 15000,
    lastTransactionDate: '2025-01-10',
    isConnected: true,
    isDormant: false,
    hasNominee: true
  }
];

export { accountData as sampleAccounts };