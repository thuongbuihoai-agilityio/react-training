// Components
import Text,
{
  SizeType
} from '@common/Text';
import Icon,
{
  IconType
} from '../Icon';

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
      <Icon iconName={IconType.vogua} />
      <Icon iconName={IconType.esquire} />
      <Icon iconName={IconType.human} />
    </div>
  </div>
);

export default Partners;
