import type { Meta, StoryObj } from '@storybook/react';
import Button, { ButtonType } from '.';

const meta: Meta<typeof Button> = {
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const ButtonPrimary: Story = {
  args: {
    text: "SHOW MORE",
    type: ButtonType.primary,
  }
};

export const ButtonSecondary: Story = {
  args: {
    text: "Add to bag $15",
    type: ButtonType.secondary,
  }
};

export const ButtonTertiary: Story = {
  args: {
    text: "LOGIN",
    type: ButtonType.tertiary,
  }
};

export const ButtonIconPrimary: Story = {
  args: {
    text: "",
    type: ButtonType.btnIconPrimary,
    icon: true
  }
};

export const ButtonIconSecondary: Story = {
  args: {
    text: "",
    type: ButtonType.btnIconSecondary,
    icon: true
  }
};

export const ButtonDisable: Story = {
  args: {
    text: "SHOW MORE",
    disable: true
  }
};
