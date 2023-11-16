import {
  memo,
  useCallback,
  useState
} from 'react';

// Components
import Image from '@components/common/Image';
import Menu,
{
  MenuTheme
} from '@components/common/Menu';
import Button,
{
  ButtonType
} from '@components/common/Button';
import Text,
{
  SizeType
} from '@components/common/Text';
import CartModal from '@components/CartModal';
import Logout from '@components/common/Logout';

// Constants
import { IMAGE } from '@constants/image';
import { MENU_HEADER } from '@constants/common';

// Styles
import './header.css';
import Icon, { IconType } from '@components/common/Icon';
import { useAuthenticationStore } from '@stores/login';
import { shallow } from 'zustand/shallow';

const Header = () => {
  const [toggleModal, setToggleModal] = useState<boolean>(false);

  const [accounts] = useAuthenticationStore(
    (state) => [
      state.accounts,
    ],
    shallow
  );

  const imageHref = accounts.length === 0 ? '/login' : '/';

  const handleToggleModal = useCallback(() => {
    setToggleModal(!toggleModal);
  }, [toggleModal]);

  return (
    <>
      <div data-testid='header' className='header'>
        <Image
          href={imageHref}
          url={IMAGE.blackLogo}
          alt={IMAGE.blackLogo}
          width={144}
          height={24}
        />
        <div className='header-menu'>
          <Menu menuList={MENU_HEADER} type={MenuTheme.horizontal} />
          <Button
            ariaLabel='Shoe Finder Quiz'
            children='Shoe Finder Quiz'
            type={ButtonType.btnOutlinePrimary}
          />
        </div>
        <div className='header-support'>
          <Text
            text='Support'
            type={SizeType.normal}
            className='header-text' />
          <Logout className='header-user' />
          <Button
            ariaLabel='Shopping bag'
            children={<Icon iconName={IconType.bag} />}
            type={ButtonType.btnIconPrimary}
            onClick={handleToggleModal}
            className='header-btn'
          />
        </div>
      </div>
      {toggleModal && <CartModal onToggleModal={handleToggleModal} />}
    </>
  );
};

export default memo(Header);
