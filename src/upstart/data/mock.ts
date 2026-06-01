import type { Loan } from '../types';

export const mockLoan: Loan = {
  id: '1',
  loanNumber: 'FN1885393',
  loanAmount: 6600,
  outstandingPrincipal: 0,
  unpaidAccruedInterest: 0,
  interestRate: 11.84,
  originationDate: 'Oct 20, 2021',
  lender: 'First National Bank of Omaha',
  pastDueAmount: 500,
  pastDueDueDate: 'Jun 6, 2024',
  payments: [
    { id: '1', date: 'May 14, 2024', amount: 302.04, status: 'paid' },
    { id: '2', date: 'Apr 28, 2024', amount: 219.00, status: 'paid' },
    { id: '3', date: 'Mar 28, 2024', amount: 219.00, status: 'paid' },
    { id: '4', date: 'Feb 28, 2024', amount: 219.00, status: 'late' },
    { id: '5', date: 'Jan 28, 2024', amount: 219.00, status: 'paid' },
  ],
  bankAccounts: [
    { id: '1', name: 'Capital One checking', last4: '9673', isAutopay: true, verified: true },
    { id: '2', name: 'Chase checking', last4: '5165', isAutopay: false, verified: true },
  ],
};

export const streakPattern: Array<'paid' | 'late' | 'reported_late' | 'past_due' | 'empty'> = [
  'paid','late','paid','paid','paid','late','paid','paid','late','paid','past_due','late',  // year 1
  'paid','paid','paid','paid','paid','paid','paid','paid','late','paid','late','empty',      // year 2
  'late','paid','paid','paid','paid','paid','empty','empty','empty','empty','empty','empty', // year 3
];
