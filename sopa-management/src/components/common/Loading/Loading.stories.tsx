// Libs
import type { Meta, StoryObj } from '@storybook/react';

// Components
import Loading from '.';

const meta: Meta<typeof Loading> = {
  component: Loading,
};

export default meta;
type Story = StoryObj<typeof Loading>;

export const DropdownSize: Story = {
  args: {}
};
