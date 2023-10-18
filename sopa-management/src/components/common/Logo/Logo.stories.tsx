import type { Meta, StoryObj } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';

// Components
import Logo from '.';

// Constants
import { IMAGE } from '../../../constants/image';

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

