import {
  Account,
  LoginType
} from "@interfaces/account";
import { FieldError } from "react-hook-form";

export enum CheckType {
  login = 'login',
  email = 'email',
  password = 'password'
}

// Check login
export const checkAccount = (
  data?: Account[],
  email?: string,
  password?: string,
  checkType?: CheckType,
) => {
  switch (checkType) {
    case CheckType.login:
      return data?.some((user: Account) => user.email === email && user.password === password);
    case CheckType.email:
      return data?.some((user: Account) => user.email === email);
    case CheckType.password:
      return data?.some((user: Account) => user.password === password);
    default:
      throw new Error('Invalid check type');
  }
};

export const checkValidationStyles = (
  serverError: boolean,
  rules: FieldError | undefined,
  isDirty: boolean,
  type: LoginType,
) => {
  const checkIsDirty = isDirty ? type.info : type.default
  const style = serverError || rules ? type.error : checkIsDirty;

  return { style };
};