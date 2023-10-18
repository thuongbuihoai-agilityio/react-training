import type { Meta, StoryObj } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';

// Components
import Logout from '.';

const meta: Meta<typeof Logout> = {
  component: Logout,
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    )
  ]
};

export default meta;
type Story = StoryObj<typeof Logout>;

export const DropdownSize: Story = {
  args: {}
};
