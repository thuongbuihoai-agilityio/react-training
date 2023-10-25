import React, { memo, useCallback, useState } from 'react';
import Button, { ButtonType } from '../Button';
import Dropdown from '../Dropdown';
import { STORAGE_KEY, USER } from '../../../constants/common';
import { User } from '../../../../public/images/icons';
import { getStorage } from '../../../helpers/storage';

interface LogoutProps {
  className?: string;
}

const Logout: React.FC<LogoutProps> = ({ className = '' }) => {
  const [showDropdown, setShowDropdown] = useState<boolean>(false);

  const handleToggle = useCallback(() => {
    setShowDropdown(!showDropdown);
  }, [showDropdown]);

  const user = getStorage(STORAGE_KEY.TOKEN);

  return (
    <div title={user.email} className={`${className} account`} data-testid='logout'>
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
