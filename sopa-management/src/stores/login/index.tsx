import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { Account, CheckType } from '@interfaces/account';
import { checkAccount } from '@helpers/login';
import { STORAGE_KEY } from '@constants/common';

interface AccountType {
  accounts: Account[];
  isIncorrectEmail: boolean;
  isIncorrectPassword: boolean;
  setAccounts: (value: Account[]) => void;
  setIsIncorrectEmail: (value: boolean) => void;
  setIsIncorrectPassword: (value: boolean) => void;
  handleLogin: (
    data?: Account[],
    email?: string,
    password?: string,
    type?: CheckType
  ) => void;
}

export const useAccountStore = create<AccountType>()(
  persist(
    (set) => ({
      accounts: [],
      isIncorrectEmail: false,
      isIncorrectPassword: false,
      setAccounts: (data: Account[]) => set(() => ({ accounts: data })),
      setIsIncorrectEmail: (value) => set(() => ({ isIncorrectEmail: value })),
      setIsIncorrectPassword: (value) =>
        set(() => ({ isIncorrectPassword: value })),
      handleLogin: (
        data?: Account[],
        email?: string,
        password?: string,
        type?: CheckType
      ) => {
        const checkCorrectEmail = checkAccount(
          data,
          email,
          '',
          CheckType.email
        );
        const checkCorrectPassword = checkAccount(
          data,
          '',
          password,
          CheckType.password
        );

        if (checkAccount(data, email, password, type)) {
          set((state) => ({
            ...state,
            isIncorrectEmail: !!checkCorrectEmail,
            isIncorrectPassword: !!checkCorrectPassword
          }));
        } else {
          set((state) => ({
            ...state,
            isIncorrectEmail: !checkCorrectEmail,
            isIncorrectPassword: !checkCorrectPassword
          }));
        }
      }
    }),
    {
      name: STORAGE_KEY.TOKEN,
      storage: createJSONStorage(() => sessionStorage),
      partialize: (state) => ({ email: state.accounts }),
      onRehydrateStorage: (state) => {
        state.handleLogin
      }
    }
  )
);
