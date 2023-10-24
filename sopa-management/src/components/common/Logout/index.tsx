import React, { memo, useCallback, useState } from 'react';
import Button, { ButtonType } from '../Button';
import Dropdown from '../Dropdown';
import { USER } from '../../../constants/common';
import { User } from '../../../../public/images/icons';

interface LogoutProps {
  className?: string;
}

const Logout: React.FC<LogoutProps> = ({ className = '' }) => {
  const [showDropdown, setShowDropdown] = useState<boolean>(false);

  const handleToggle = useCallback(() => {
    setShowDropdown(!showDropdown);
  }, [showDropdown]);

  return (
    <div className={`${className} account`} data-testid='logout'>
      <Button
        children={<User />}
        type={ButtonType.btnIconPrimary}
        onClick={handleToggle}
      />
      {showDropdown && (
        <Dropdown dataUser={USER} isHref className='account-dropdown' />
      )}
    </div>
  );
};

export default memo(Logout);
