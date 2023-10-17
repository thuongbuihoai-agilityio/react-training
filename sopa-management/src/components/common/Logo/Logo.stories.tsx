import type { Meta, StoryObj } from '@storybook/react';
import Logo from '.';
import { IMAGE } from '../../../constants/image';

const meta: Meta<typeof Logo> = {
  component: Logo,
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

