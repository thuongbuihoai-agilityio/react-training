// Libs
import type { Meta, StoryObj } from '@storybook/react';

// Components
import Input,
{
  InputTheme,
  InputType
} from '.';

const meta: Meta<typeof Input> = {
  component: Input,
};

export default meta;
type Story = StoryObj<typeof Input>;

export const InputDefault: Story = {
  args: {
    label: 'Email address',
    type: InputType.default
  }
};

export const InputInfo: Story = {
  args: {
    label: 'Email address',
    type: InputType.info,
    theme: InputTheme.info,
  }
};

export const InputError: Story = {
  args: {
    label: 'Email address',
    type: InputType.error,
    theme: InputTheme.error,
  }
};
