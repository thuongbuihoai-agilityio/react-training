import React, { memo } from 'react';
import { Link } from 'react-router-dom';

// Styles
import './dropdown.css';

export type SizeType = {
  key?: string;
  label?: string;
};

export type UserType = {
  key?: string;
  label?: string;
  href: string;
};

interface DropdownProps {
  dataSize?: SizeType[];
  dataUser?: UserType[];
  isHref?: boolean;
  className?: string;
}

const Dropdown: React.FC<DropdownProps> = ({
  dataSize = [],
  dataUser = [],
  isHref,
  className =  ''
}) => (
  <div data-testid='dropdown' className={`${className} custom-dropdown`}>
    <select className='dropdown'>
      {isHref
        ? dataUser.map((item: UserType) => (
            <option key={item.key} value={item.label} className='option'>
              <Link to={item.href}>{item.label}</Link>
            </option>
          ))
        : dataSize.map((item: SizeType) => (
            <option key={item.key} value={item.label} className='option'>
              {item.label}
            </option>
          ))}
    </select>
  </div>
);

export default memo(Dropdown);
