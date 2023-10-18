// Libs
import React, { memo } from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  url?: string;
  alt?: string;
  href: string;
  className?: string;
}

const Logo: React.FC<LogoProps> = ({
  url = '',
  alt = '',
  href,
  className = '',
}) => (
  <Link data-testid='logo' to={href}>
    <img className={className} src={url} alt={alt} />
  </Link>
);

export default memo(Logo);
