import React, { memo } from 'react';

// Styles
import './dropdown.css';

type SizeType = {
  key?: string;
  label?: string;
};

interface DropdownProps {
  data?: SizeType[];
}

const Dropdown: React.FC<DropdownProps> = ({ data = [] }) => (
  <div data-testid='dropdown' className='custom-dropdown'>
    <select className='dropdown'>
      {data.map((item: SizeType) => (
        <option key={item.key} value={item.label} className='option'>
          {item.label}
        </option>
      ))}s
    </select>
  </div>
);

export default memo(Dropdown);
