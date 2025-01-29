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
    hasNominee: true,
    nominee: 'Jane Doe',
    daysToDormancy: 15,
    isFamilyVerified: true,
    lastUpdated: '2024-03-20',
    recentTransactions: [
      { date: '2025-01-15', amount: -500, description: 'Grocery Store' },
      { date: '2025-01-10', amount: 2000, description: 'Salary' }
    ]
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
    hasNominee: false,
    nominee: 'Jane Smith',
    daysToDormancy: 30,
    isFamilyVerified: false,
    lastUpdated: '2024-03-19',
    recentTransactions: [
      { date: '2024-12-20', amount: -1000, description: 'Rent' },
      { date: '2024-12-15', amount: 3000, description: 'Freelance Work' }
    ]
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
    hasNominee: true,
    nominee: 'Alice Johnson',
    daysToDormancy: 45,
    isFamilyVerified: true,
    lastUpdated: '2024-03-18',
    recentTransactions: [
      { date: '2025-01-10', amount: -750, description: 'Utilities' },
      { date: '2025-01-05', amount: 1500, description: 'Investment Return' }
    ]
  }
];

export { accountData as sampleAccounts };