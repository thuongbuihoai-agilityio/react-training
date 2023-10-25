import { create } from 'zustand';
import { Account } from '../../interfaces/account';

interface AccountType {
  accounts: Account[];
  setAccounts: (value: Account[]) => void;
}

export const useAccountStore = create<AccountType>()((set) => ({
  accounts: [],
  setAccounts: (data: Account[]) => set(() => ({ accounts: data }))
}));
