import type { Meta, StoryObj } from '@storybook/react';
import Dropdown from '.';
import { SIZE } from '../../../constants/common';

const meta: Meta<typeof Dropdown> = {
  component: Dropdown,
};

export default meta;
type Story = StoryObj<typeof Dropdown>;

export const DropdownSize: Story = {
  args: {
    data: SIZE,
  }
};
