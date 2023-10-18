import type { Meta, StoryObj } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';

// Components
import Menu, { MenuTheme } from '.';

// Constants
import {
  MENU_EVERYTHING_ELSE,
  MENU_HEADER
} from '../../../constants/common';

const meta: Meta<typeof Menu> = {
  component: Menu,
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Menu>;

export const MenuHeader: Story = {
  args: {
    menuList: MENU_HEADER,
    type: MenuTheme.primary
  }
};

export const MenuFooter: Story = {
  args: {
    mainItem: "Everything Else",
    menuList: MENU_EVERYTHING_ELSE,
    type: MenuTheme.secondary
  }
};

