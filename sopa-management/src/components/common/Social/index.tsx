import { memo } from 'react';
import { Link } from 'react-router-dom';

// Images
import {
  Facebook,
  Instagram,
  Twitter
} from '../../../../public/images/icons';

// Components
import Text,
{
  ThemeType
} from '@common/Text';

// Styles
import './social.css';

const Social: React.FC = () => {
  return (
    <ul data-testid='social' className='social-list'>
      <li className='social-item'>
        <Link
          title='twitter'
          to='https://twitter.com'
          className='social-link'
          aria-label='link to twitter'
        >
          <Twitter />
        </Link>
        <Text text='Twitter' type={ThemeType.light} />
      </li>
      <li className='social-item'>
        <Link
          title='instagram'
          to='https://instagram.com'
          className='social-link'
          aria-label='link to instagram'
        >
          <Instagram />
        </Link>
        <Text text='Instagram' type={ThemeType.light} />
      </li>
      <li className='social-item'>
        <Link
          title='facebook'
          to='https://facebook.com'
          className='social-link'
          aria-label='link to facebook'
        >
          <Facebook />
        </Link>
        <Text text='Facebook' type={ThemeType.light} />
      </li>
    </ul>
  );
};

export default memo(Social);
