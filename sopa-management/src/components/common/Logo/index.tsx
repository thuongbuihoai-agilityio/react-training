// Libs
import React, { memo } from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  url: string;
  alt?: string;
}

const Logo: React.FC<LogoProps> = ({
  url,
  alt = ''
}) => (
  <Link data-testid='logo' to='/'>
    <img className='logo' src={url} alt={alt} />
  </Link>
);

export default memo(Logo);
