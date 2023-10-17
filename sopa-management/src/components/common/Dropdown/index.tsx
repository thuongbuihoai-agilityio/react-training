import React, { memo } from 'react';
import './dropdown.css';

type SizeType = {
  key?: string;
  label?: string;
};

interface DropdownProps {
  data?: SizeType[];
}

const Dropdown: React.FC<DropdownProps> = ({ data = [] }) => {
  return (
    <div data-testid='dropdown' className='custom-dropdown'>
      <select className='dropdown'>
        {data.map((item: SizeType) => (
          <option key={item.key} value={item.label} className='option'>
            {item.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default memo(Dropdown);
