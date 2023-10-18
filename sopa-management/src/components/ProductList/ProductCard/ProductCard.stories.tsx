import type { Meta, StoryObj } from '@storybook/react';
import ProductCard from '.';
import { BrowserRouter } from 'react-router-dom';
import { IMAGE } from '../../../constants/image';

// Components

const meta: Meta<typeof ProductCard> = {
  component: ProductCard,
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof ProductCard>;

export const TextNormal: Story = {
  args: {
    name: 'Black shoes',
    color: 'Black',
    price: 145,
    href: '/',
    src: IMAGE.blackShoes,
    alt: IMAGE.altBlackShoes,
  }
};