import { memo } from 'react';

// Components
import Button from '@common/Button';
import Text from '@common/Text';

// Styles
import './popup.css';

interface PopupDeleteProps {
  title?: string;
  onCancel: () => void;
  onDelete: () => void;
}

const PopupDelete = ({
  title = '',
  onCancel,
  onDelete,
}: PopupDeleteProps) => (
  <div data-testid='popup-delete' className='popup'>
    <Text text={title} />
    <div className='popup-btn'>
      <Button
        ariaLabel='Cancel'
        children='Cancel'
        className='popup-cancel'
        onClick={onCancel}
      />
      <Button
        ariaLabel='Delete'
        children='Delete'
        className='popup-delete'
        onClick={onDelete}
      />
    </div>
  </div>
);

export default memo(PopupDelete);
