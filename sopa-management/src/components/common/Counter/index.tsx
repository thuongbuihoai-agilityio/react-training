import { memo } from 'react';

// Components
import Button, { ButtonType } from '../Button';

// Stores
import { useCounterStore } from '../../../stores/counter';

// Styles
import './counter.css';
import Input from '../Input';

const Counter: React.FC = () => {
  const { count, increment, decrement } = useCounterStore();

  return (
    <div data-testId='counter' className='counter'>
      <Button
        type={ButtonType.btnIconPrimary}
        className='counter-minus'
        onClick={decrement}
      />
      <Input type='number' classNameInput='counter-input' value={count} />
      <Button
        type={ButtonType.btnIconPrimary}
        className='counter-plus'
        onClick={increment}
      />
    </div>
  );
};

export default memo(Counter);
