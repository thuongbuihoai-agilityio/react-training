import React, { memo, useCallback, useState } from 'react';
import Button, { ButtonType } from '../Button';
import Icon, { IconType } from '../Icon';
import Dropdown from '../Dropdown';
import { USER } from '../../../constants/common';
import { Link } from 'react-router-dom';

const Logout: React.FC = () => {
  const [showDropdown, setShowDropdown] = useState<boolean>(false);

  const handleToggle = useCallback(() => {
    setShowDropdown(!showDropdown);
  }, [showDropdown]);

  return (
    <div data-testid='logout'>
      <Button
        children={<Icon iconName={IconType.user} />}
        type={ButtonType.btnIconPrimary}
        onClick={handleToggle}
      />
      {showDropdown && (
        <Link to='/'>
          <Dropdown data={USER} />
        </Link>
      )}
    </div>
  );
};

export default memo(Logout);
