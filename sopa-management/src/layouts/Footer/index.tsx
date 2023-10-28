import { memo } from 'react';

// Components
import Image from '@components/common/Image';
import Text,
{
  ThemeType
} from '@components/common/Text';
import Button,
{
  ButtonType
} from '@components/common/Button';
import Menu,
{
  MenuTheme
} from '@components/common/Menu';
import Social from '@components/common/Social';

// Constants
import {
  MENU_EVERYTHING_ELSE,
  MENU_PRODUCTS,
  MENU_SUPPORT
} from '@constants/common';
import { IMAGE } from '@constants/image';

// Styles
import './footer.css';

const Footer = () => (
  <div data-testid='footer' className='footer'>
    <div className='footer-content'>
      <div className='footer-email'>
        <Image href='/' url={IMAGE.whiteLogo} alt={IMAGE.whiteLogo} />
        <Text
          text='Stay informed about Sopa with our latest releases and founder news.'
          type={ThemeType.light}
          className='footer-text'
        />
        <Button
          children='Enter email here for updates'
          type={ButtonType.btnOutlineSecondary}
        />
      </div>
      <Menu
        value='Products'
        menuList={MENU_PRODUCTS}
        type={MenuTheme.vertical}
      />
      <Menu value='Support' menuList={MENU_SUPPORT} type={MenuTheme.vertical} />
      <Menu
        value='Everything Else'
        menuList={MENU_EVERYTHING_ELSE}
        type={MenuTheme.vertical}
      />
      <div className='footer-social'>
        <Social />
      </div>
    </div>
  </div>
);

export default memo(Footer);
