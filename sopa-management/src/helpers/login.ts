import { InputTheme, InputType } from "@components/common/Input";
import { Account } from "@interfaces/account";
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
) => {
  const style = serverError || rules ? InputType.error : isDirty ? InputType.info : InputType.default;
  const theme = serverError || rules ? InputTheme.error : isDirty ? InputTheme.info : InputTheme.default

  return { style, theme };
};