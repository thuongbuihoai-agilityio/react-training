import React, { memo, useCallback, useState } from 'react';
import Button, { ButtonType } from '../Button';
import Dropdown from '../Dropdown';
import { STORAGE_KEY } from '../../../constants/common';
import { User } from '../../../../public/images/icons';
import { clearStorage, getStorage } from '../../../helpers/storage';

interface LogoutProps {
  className?: string;
}

const Logout: React.FC<LogoutProps> = ({ className = '' }) => {
  const [showDropdown, setShowDropdown] = useState<boolean>(false);

  const handleToggle = useCallback(() => {
    setShowDropdown(!showDropdown);
  }, [showDropdown]);

  const handleLogout = () => {
    clearStorage();
    window.location.href = '/login';
  }

  return (
    <div className={`${className} account`} data-testid='logout'>
      <Button
        children={<User />}
        type={ButtonType.btnIconPrimary}
        onClick={handleToggle}
      />
      {showDropdown && (
        <Dropdown
          isHref
          className='account-dropdown'
          onLogout={handleLogout}
          closeDropdown={handleToggle}
        />
      )}
    </div>
  );
};

export default memo(Logout);
