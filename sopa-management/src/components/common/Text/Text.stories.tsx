import type { Meta, StoryObj } from '@storybook/react';
import Text, { SizeType, ThemeType } from '.';

const meta: Meta<typeof Text> = {
  component: Text,
};

export default meta;
type Story = StoryObj<typeof Text>;

export const TextNormal: Story = {
  args: {
    text: "Sopa management",
    size: SizeType.normal,
  }
}

export const TextRegular: Story = {
  args: {
    text: "Sopa management",
    size: SizeType.regular,
  }
}

export const TextRegularDark: Story = {
  args: {
    text: "Sopa management",
    size: ThemeType.dark,
  }
}

export const TextMedium: Story = {
  args: {
    text: "Sopa management",
    size: SizeType.medium,
  }
}

export const TextMediumOutline: Story = {
  args: {
    text: "Sopa management",
    size: ThemeType.light,
  }
}

export const TextLarge: Story = {
  args: {
    text: "Sopa management",
    size: SizeType.large,
  }
}

export const TextLargeDark: Story = {
  args: {
    text: "Sopa management",
    size: ThemeType.dark,
  }
}
