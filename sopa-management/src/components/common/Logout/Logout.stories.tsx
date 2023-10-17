import type { Meta, StoryObj } from '@storybook/react';
import Logout from '.';

const meta: Meta<typeof Logout> = {
  component: Logout,
};

export default meta;
type Story = StoryObj<typeof Logout>;

export const DropdownSize: Story = {
  args: {}
};
