import {
  memo,
  useCallback,
  useState
} from 'react';
import { useNavigate } from 'react-router-dom';

// Components
import Button, { ButtonType } from '@common/Button';
import Dropdown from '@common/Dropdown';

// Public
import { User } from '@assets/icons';

// Helpers
import { clearStorage } from '@helpers/storage';

// Constants
import { STORAGE_KEY } from '@constants/common';

interface LogoutProps {
  className?: string;
}

const Logout = ({ className = '' }: LogoutProps) => {
  const navigate = useNavigate()
  const [showDropdown, setShowDropdown] = useState<boolean>(false);

  const handleToggle = useCallback(() => {
    setShowDropdown(!showDropdown);
  }, [showDropdown]);

  const handleLogout = () => {
    clearStorage(STORAGE_KEY.TOKEN);
    navigate('/login');
  }

  const handleToggleItem = useCallback(() => {
    handleToggle();
    handleLogout();
  }, [showDropdown]);

  return (
    <div className={`${className} account`} data-testid='logout'>
      <Button
        ariaLabel='User'
        children={<User />}
        type={ButtonType.btnIconPrimary}
        onClick={handleToggle}
      />
      {showDropdown && (
        <Dropdown
          isHref
          className='account-dropdown'
          onClick={handleToggleItem}
        />
      )}
    </div>
  );
};

export default memo(Logout);
