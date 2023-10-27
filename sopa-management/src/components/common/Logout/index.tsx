import React,
{
  memo,
  useCallback,
  useState
} from 'react';

// Components
import Button, { ButtonType } from '../Button';
import Dropdown from '../Dropdown';

// Public
import { User } from '../../../../public/images/icons';

// Helpers
import { clearStorage } from '../../../helpers/storage';

// Constants
import { STORAGE_KEY } from '../../../constants/common';

interface LogoutProps {
  className?: string;
}

const Logout: React.FC<LogoutProps> = ({ className = '' }) => {
  const [showDropdown, setShowDropdown] = useState<boolean>(false);

  const handleToggle = useCallback(() => {
    setShowDropdown(!showDropdown);
  }, [showDropdown]);

  const handleLogout = () => {
    clearStorage(STORAGE_KEY.TOKEN);
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
