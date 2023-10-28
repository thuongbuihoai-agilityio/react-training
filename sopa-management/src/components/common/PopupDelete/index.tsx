import { memo } from 'react';

// Components
import Button from '@common/Button';
import Text,
{
  ThemeType
} from '@common/Text';

// Styles
import './popup.css';

interface PopupDeleteProps {
  title?: string;
  onCancel: () => void;
  onDelete: () => void;
}

const PopupDelete: React.FC<PopupDeleteProps> = ({
  title = '',
  onCancel,
  onDelete,
}) => (
  <div data-testid='popup-delete' className='popup'>
    <Text text={title} type={ThemeType.light} />
    <div className='popup-btn'>
      <Button
        children='Cancel'
        className='popup-cancel'
        onClick={onCancel}
      />
      <Button
        children='Delete'
        className='popup-delete'
        onClick={onDelete}
      />
    </div>
  </div>
);

export default memo(PopupDelete);
