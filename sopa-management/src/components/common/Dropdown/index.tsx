import React, { memo } from 'react';
import { Link, NavLink } from 'react-router-dom';

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
  onLogout?: () => void;
  closeDropdown?: () => void;
}

const Dropdown: React.FC<DropdownProps> = ({
  dataSize = [],
  isHref,
  className = '',
  onLogout = () => {},
  closeDropdown = () => {}
}) => {

  const handleToggle = () => {
    closeDropdown(),
    onLogout()
  }

  return (
    <div data-testid='dropdown' className={`${className} custom-dropdown`}>
      <ul className='dropdown'>
        {isHref ?
          <li onClick={handleToggle} className='option'>
            Logout
          </li>
          : dataSize.map((item: SizeType) => (
            <li key={item.key} value={item.label} className='option'>
              {item.label}
            </li>
          ))}
      </ul>
    </div>
  );
}

export default memo(Dropdown);
