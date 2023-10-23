// Libs
import { renderHook } from '@testing-library/react';
import { act } from 'react-dom/test-utils';

// Stores
import { useCounterStore } from '../counter';

describe('useCounterStore', () => {
  it('should set count correctly', () => {
    const { result } = renderHook(() => useCounterStore());
    expect(result.current.count).toBe(0);

    act(() => {
      result.current.setCount(5);
    });

    expect(result.current.count).toBe(5);
  });
});
