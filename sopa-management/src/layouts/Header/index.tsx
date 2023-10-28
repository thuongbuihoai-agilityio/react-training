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
import CartModal from '@components/common/CartModal';
import Logout from '@components/common/Logout';

// Constants
import { IMAGE } from '@constants/image';
import { MENU_HEADER } from '@constants/common';

// Images
import { ShoppingBag } from '../../../public/images/icons';

// Styles
import './header.css';

const Header = () => {
  const [toggleModal, setToggleModal] = useState<boolean>(false);

  const handleToggleModal = useCallback(() => {
    setToggleModal(!toggleModal);
  }, [toggleModal]);

  return (
    <>
      <div data-testid='header' className='header'>
        <Image href='/' url={IMAGE.blackLogo} alt={IMAGE.blackLogo} />
        <div className='header-menu'>
          <Menu menuList={MENU_HEADER} type={MenuTheme.horizontal} />
          <Button
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
            children={<ShoppingBag />}
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
