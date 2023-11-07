// Components
import Text from '@common/Text';
import Icon,
{
  IconType
} from '@components/common/Icon';

interface RatingStart {
  value?: string;
  type?: string;
  className?: string;
  classNameStar?: string;
}

const RatingStar = ({
  className,
  classNameStar,
  value,
  type
}: RatingStart) => (
  <div className={`${className}`}>
    <div data-testid='rating-star' className={`${classNameStar}`}>
      <Icon iconName={IconType.star} />
      <Icon iconName={IconType.star} />
      <Icon iconName={IconType.star} />
      <Icon iconName={IconType.star} />
      <Icon iconName={IconType.star} />
    </div>
    <Text
      text={value}
      type={type}
    />
  </div>
);

export default RatingStar;
