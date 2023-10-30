import { renderHook } from "@testing-library/react";
import { useAccountStore } from "../login";
import { act } from "react-dom/test-utils";
import { MOCK_ACCOUNTS } from "../../__mocks__/account";

describe('useAccountStore', () => {
  test('should set accounts correctly', () => {
    const { result } = renderHook(() => useAccountStore());
    act(() => {
      result.current.setAccounts(MOCK_ACCOUNTS);
    });
    expect(result.current.accounts).toEqual(MOCK_ACCOUNTS);
  });

  test('should set isIncorrectEmail correctly', () => {
    const { result } = renderHook(() => useAccountStore());
    act(() => {
      result.current.setIsIncorrectEmail(true);
    });
    expect(result.current.isIncorrectEmail).toBe(true);
  });

  test('should set isIncorrectPassword correctly', () => {
    const { result } = renderHook(() => useAccountStore());
    act(() => {
      result.current.setIsIncorrectPassword(true);
    });
    expect(result.current.isIncorrectPassword).toBe(true);
  });
});