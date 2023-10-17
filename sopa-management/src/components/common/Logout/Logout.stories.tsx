import type { Meta, StoryObj } from '@storybook/react';
import Logout from '.';
import { BrowserRouter } from 'react-router-dom';

const meta: Meta<typeof Logout> = {
  component: Logout,
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Logout>;

export const DropdownSize: Story = {
  args: {}
};
