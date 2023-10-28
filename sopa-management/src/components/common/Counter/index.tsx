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
}) => {
  return (
    <div data-testId='counter' className='counter'>
      <Button
        type={ButtonType.btnIconPrimary}
        className='counter-minus'
        onClick={onDecrement}
      />
      <Input type='number' classNameInput='counter-input' value={value} />
      <Button
        type={ButtonType.btnIconPrimary}
        className='counter-plus'
        onClick={onIncrement}
      />
    </div>
  );
};

export default memo(Counter);
