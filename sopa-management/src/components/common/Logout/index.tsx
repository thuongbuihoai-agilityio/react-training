import {
  useCallback,
  useState
} from 'react';
import { useNavigate } from 'react-router-dom';

// Components
import Button, { ButtonType } from '@common/Button';
import Dropdown from '@common/Dropdown';
import Icon, { IconType } from '../Icon';

// Constants
import { useAccountStore } from '@stores/login';

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
    useAccountStore.persist.clearStorage()
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
