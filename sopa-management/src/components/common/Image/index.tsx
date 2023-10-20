// Libs
import React, { memo } from 'react';
import { Link } from 'react-router-dom';

interface ImageProps {
  url?: string;
  alt?: string;
  href?: string;
  className?: string;
}

const Image: React.FC<ImageProps> = ({
  url = '',
  alt = '',
  href,
  className = ''
}) =>
  href ? (
    <Link data-testid='image-link' to={href}>
      <img className={className} src={url} alt={alt} />
    </Link>
  ) : (
    <img data-testid='image' className={className} src={url} alt={alt} />
  );

export default memo(Image);
