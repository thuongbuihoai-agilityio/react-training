import { memo } from 'react';

// Components
import { Star } from '../../../../public/images/icons';
import Text from '../../common/Text';

interface RatingStart {
  value?: string;
  type?: string;
  className?: string;
  classNameStar?: string;
}

const RatingStar: React.FC<RatingStart> = ({
  className,
  classNameStar,
  value,
  type
}) => (
  <div className={`${className}`}>
    <div data-testid='rating-star' className={`${classNameStar}`}>
      <Star />
      <Star />
      <Star />
      <Star />
      <Star />
    </div>
    <Text
      text={value}
      type={type}
    />
  </div>
);

export default memo(RatingStar);
