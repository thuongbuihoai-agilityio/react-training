import { memo } from 'react';

// Components
import { Star } from '../../../../public/images/icons';

interface RatingStart {
  className?: string;
}

const RatingStar: React.FC<RatingStart> = ({
  className
}) => (
  <div data-testid='rating-star' className={`${className} rating-star`}>
    <Star />
    <Star />
    <Star />
    <Star />
    <Star />
  </div>
);

export default memo(RatingStar);
