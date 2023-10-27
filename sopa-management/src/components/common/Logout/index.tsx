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
import { useNavigate } from 'react-router-dom';

interface LogoutProps {
  className?: string;
}

const Logout: React.FC<LogoutProps> = ({ className = '' }) => {
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
