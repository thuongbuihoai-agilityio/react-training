import { create } from 'zustand';
import { Account } from '../../interfaces/account';

interface AccountType {
  isIncorrectEmail: boolean;
  isIncorrectPassword: boolean;
  accounts: Account[];
  setAccounts: (value: Account[]) => void;
  setIsIncorrectEmail: (value: boolean) => void;
  setIsIncorrectPassword: (value: boolean) => void;
}

export const useAccountStore = create<AccountType>()((set) => ({
  accounts: [],
  isIncorrectEmail: false,
  isIncorrectPassword: false,
  setAccounts: (data: Account[]) => set(() => ({ accounts: data })),
  setIsIncorrectEmail: (value) => set(() => ({ isIncorrectEmail: value })),
  setIsIncorrectPassword: (value) => set(() => ({ isIncorrectPassword: value })),
}));
