// Images
import { IMAGE } from '@constants/image';

// Components
import Button,
{
  ButtonType
} from '@common/Button';
import Image from '@common/Image';
import Input from '@common/Input';
import Text,
{
  SizeType
} from '@common/Text';

// Constants
import { CAROUSEL_BULLET } from '@constants/common';

// Styles
import './carousel.css';

const Carousel: React.FC = () => (
  <div data-testid='carousel' className='carousel'>
    <div className='carousel-inner'>
      <Input
        className='carousel-open'
        type='radio'
        id='carousel-1'
        name='carousel'
        hidden
        checked
      />
      <figure className='carousel-item'>
        <Image url={IMAGE.banner} alt={IMAGE.altBanner} />
      </figure>
      <Input
        className='carousel-open'
        type='radio'
        id='carousel-2'
        name='carousel'
        hidden
      />
      <figure className='carousel-item'>
        <Image url={IMAGE.banner2} alt={IMAGE.altBanner} />
      </figure>
      <Input
        className='carousel-open'
        type='radio'
        id='carousel-3'
        name='carousel'
        hidden
      />
      <figure className='carousel-item'>
        <Image url={IMAGE.banner3} alt={IMAGE.altBanner} />
      </figure>
      <ul className='carousel-indicators'>
        {CAROUSEL_BULLET.map((item) => (
          <li key={item.key}>
            <label htmlFor={item.htmlFor} className={item.className} />
          </li>
        ))}
      </ul>
    </div>
    <div className='carousel-info'>
      <Text
        text='Step inside, for comfort and magic await you.'
        type={SizeType.large}
        className='carousel-heading'
      />
      <Button children='Show now' type={ButtonType.primary} />
    </div>
  </div>
);

export default Carousel;
