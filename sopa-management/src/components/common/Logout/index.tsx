import {
  useCallback,
  useState
} from 'react';
import { useNavigate } from 'react-router-dom';
import { useShallow } from 'zustand/react/shallow';

// Components
import Button, { ButtonType } from '@common/Button';
import Dropdown from '@common/Dropdown';
import Icon, { IconType } from '../Icon';

// Constants
import { useAuthenticationStore } from '@stores/login';

interface LogoutProps {
  className?: string;
}

const Logout = ({ className = '' }: LogoutProps) => {
  const navigate = useNavigate();

  const { logout } = useAuthenticationStore(
    useShallow((state) => ({
      logout: state.logout
    }))
  );

  const [showDropdown, setShowDropdown] = useState<boolean>(false);

  const handleToggle = useCallback(() => {
    setShowDropdown(!showDropdown);
  }, [showDropdown]);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const handleToggleItem = useCallback(() => {
    handleToggle();
    handleLogout();
  }, [showDropdown]);

  return (
    <div className={`${className} account`} data-testid='logout'>
      <Button
        ariaLabel='User'
        children={<Icon iconName={IconType.user} />}
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

export default Logout;
