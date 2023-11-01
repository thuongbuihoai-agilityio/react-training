import { memo } from 'react';

// Components
import Button, { ButtonType } from '@common/Button';
import Input from '../Input';

// Styles
import './counter.css';

interface CounterProps {
  value: number;
  onIncrement: () => void;
  onDecrement: () => void;
}

const Counter: React.FC<CounterProps> = ({
  value,
  onIncrement,
  onDecrement
}) => (
  <div data-testid='counter' className='counter'>
    <Button
      ariaLabel='Decrement'
      type={ButtonType.btnIconPrimary}
      className='counter-minus'
      onClick={onDecrement}
    />
    <Input type='number' classNameInput='counter-input' value={value} />
    <Button
      ariaLabel='Increment'
      type={ButtonType.btnIconPrimary}
      className='counter-plus'
      onClick={onIncrement}
    />
  </div>
);

export default memo(Counter);
