import type { Meta, StoryObj } from '@storybook/react';
import Logo from '.';
import { IMAGE } from '../../../constants/image';
import { BrowserRouter } from 'react-router-dom';

const meta: Meta<typeof Logo> = {
  component: Logo,
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Logo>;

export const WhiteLogo: Story = {
  args: {
    url: IMAGE.whiteLogo,
    alt: IMAGE.atl,
  }
};

export const BlackLogo: Story = {
  args: {
    url: IMAGE.blackLogo,
    alt: IMAGE.atl,
  }
};

