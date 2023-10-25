import { memo } from 'react';

// Components
import Text,
{
  SizeType
} from '../common/Text';
import RatingStar from './RatingStar';

// Styles
import './rating.css';

const Rating = () => (
  <div data-testid='rating' className='rating'>
    <Text text='Ratings and Reviews' type={SizeType.large} />
    <Text
      text='An overwhelming 97% of reviewers have endorsed this product, recommending it wholeheartedly to their friends and family.'
      type={SizeType.regular}
      className='rating-info'
    />
    <Text text='4.7' type={SizeType.large} />
    <RatingStar className='rating-vote' />
    <Text
      text='Based on 3,205 reviews'
      type={SizeType.normal}
      className='rating-review'
    />
    <hr />
  </div>
);

export default memo(Rating);
