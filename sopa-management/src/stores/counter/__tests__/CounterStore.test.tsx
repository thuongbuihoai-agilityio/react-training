import {
  act,
  renderHook
} from '@testing-library/react';

// Stores
import { useCounterStore } from '..';

// Hooks
describe('Test useCounterStores', () => {
  it('Initial value of useCounterStores', () => {
    const { result } = renderHook(() => useCounterStore());
    expect(result.current.count).toEqual(0);
  });

  it('Should change value of count when click increment button', () => {
    const { result } = renderHook(() => useCounterStore());

    expect(result.current.count).toEqual(0);
    act(() => result.current.increment());
    expect(result.current.count).toEqual(1);
  });

  it('Should add more value when click decrement button', () => {
    const { result } = renderHook(() => useCounterStore());

    expect(result.current.count).toEqual(1);
    act(() => result.current.decrement());
    expect(result.current.count).toEqual(0);
  });
});
