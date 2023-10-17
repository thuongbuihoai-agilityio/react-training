import type { Meta, StoryObj } from '@storybook/react';
import Icon, { IconType } from '.';

const meta: Meta<typeof Icon> = {
  component: Icon,
};

export default meta;
type Story = StoryObj<typeof Icon>;

export const IconCart: Story = {
  args: {
    iconName: IconType.user
  }
};
