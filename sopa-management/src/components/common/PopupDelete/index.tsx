import { memo } from 'react';

// Components
import Button from '../Button';
import Text,
{
  ThemeType
} from '../Text';

// Styles
import './popup.css';

interface PopupDeleteProps {
  onCancel: () => void;
  onDelete: () => void;
}

const PopupDelete: React.FC<PopupDeleteProps> = ({
  onCancel,
  onDelete,
}) => (
  <div data-testid='popup-delete' className='popup'>
    <Text text='Are you sure you want to delete?' type={ThemeType.light} />
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
