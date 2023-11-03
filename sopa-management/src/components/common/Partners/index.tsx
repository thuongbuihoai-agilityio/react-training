// Images
import {
  Esquire,
  HumansOfNewYork,
  Vogua
} from '@assets/icons';

// Components
import Text,
{
  SizeType
} from '@common/Text';

// Styles
import './partners.css';

const Partners = () => (
  <div data-testid='partners' className='partners'>
    <Text
      text='“These are the most thoughtfully designed sneakers on the market.”'
      type={SizeType.medium}
      className='partners-heading'
    />
    <div className='partners-image'>
      <Vogua />
      <Esquire />
      <HumansOfNewYork />
    </div>
  </div>
);

export default Partners;
