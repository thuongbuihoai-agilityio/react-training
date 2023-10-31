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
  data?: SizeType[];
  value?: string;
  isHref?: boolean;
  className?: string;
  onClick?: () => void;
  onSetValue?: (value?: string) => void;
}

const Dropdown: React.FC<DropdownProps> = ({
  data = [],
  isHref,
  value,
  className = '',
  onClick,
  onSetValue = () => {}
}) => (
  <div data-testid='dropdown' className={`${className} custom-dropdown`}>
    <input type='checkbox' id='my-dropdown' value='' name='my-checkbox' />
    {isHref ? (
      <Link
        to='/login'
        className='dropdown-link'
        aria-label='link to login page'
        onClick={onClick}
      >
        Logout
      </Link>
    ) : (
      <>
        <label
          htmlFor='my-dropdown'
          data-toggle='dropdown'
          className='dropdown-label'
        >
          {value}
        </label>
        <ul className='dropdown-list'>
          {data.map((item: SizeType) => (
            <li
              id='my-dropdown'
              key={item.key}
              value={item.label}
              className='dropdown-option'
              onClick={() => onSetValue(item.label)}
            >
              {item.label}
            </li>
          ))}
        </ul>
      </>
    )}
  </div>
);

export default memo(Dropdown);
