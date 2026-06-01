export interface Payment {
  id: string;
  date: string;
  amount: number;
  status: 'paid' | 'late' | 'reported_late' | 'past_due';
}

export interface BankAccount {
  id: string;
  name: string;
  last4: string;
  isAutopay: boolean;
  verified: boolean;
}

export interface Loan {
  id: string;
  loanNumber: string;
  loanAmount: number;
  outstandingPrincipal: number;
  unpaidAccruedInterest: number;
  interestRate: number;
  originationDate: string;
  lender: string;
  payments: Payment[];
  bankAccounts: BankAccount[];
  pastDueAmount: number;
  pastDueDueDate: string;
}

export type ChatStep =
  | 'menu'
  | 'split-confirm'
  | 'split-processing'
  | 'success'
  | 'update-method'
  | 'full-confirm'
  | 'full-success';

export interface ChatMessage {
  role: 'bot' | 'user';
  content: string;
}
