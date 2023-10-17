import type { Meta, StoryObj } from '@storybook/react';
import Button, { ButtonType } from '.';
import Icon, { IconType } from '../Icon';

const meta: Meta<typeof Button> = {
  component: Button
};

export default meta;
type Story = StoryObj<typeof Button>;

export const ButtonPrimary: Story = {
  args: {
    children: 'Show more',
    type: ButtonType.primary
  }
};

export const ButtonSecondary: Story = {
  args: {
    children: 'Add to bag $15',
    type: ButtonType.secondary
  }
};

export const ButtonTertiary: Story = {
  args: {
    children: 'LOGIN',
    type: ButtonType.tertiary
  }
};

export const ButtonIconPrimary: Story = {
  args: {
    type: ButtonType.btnIconPrimary,
    children: <Icon iconName={IconType.trash} />
  }
};

export const ButtonIconSecondary: Story = {
  args: {
    type: ButtonType.btnIconSecondary,
    children: <Icon iconName={IconType.trash} />
  }
};

export const ButtonDisable: Story = {
  args: {
    children: 'SHOW MORE',
    disable: true
  }
};
