import type { Meta, StoryObj } from '@storybook/react';
import Text, { SizeType, ThemeType } from '.';

const meta: Meta<typeof Text> = {
  component: Text,
};

export default meta;
type Story = StoryObj<typeof Text>;

export const TextNormalDark: Story = {
  args: {
    text: "Sopa management",
    size: SizeType.normal,
  }
}

export const TextHighLightPrimary: Story = {
  args: {
    text: "Sopa management",
    size: ThemeType.highlightPrimary,
  }
}

export const TextHightLightSecondary: Story = {
  args: {
    text: "Sopa management",
    size: ThemeType.highlightSecondary,
  }
}

export const TextRegular: Story = {
  args: {
    text: "Sopa management",
    size: SizeType.regular,
  }
}

export const TextExtraMedium: Story = {
  args: {
    text: "Sopa management",
    size: SizeType.extraMedium,
  }
}

export const TextLarge: Story = {
  args: {
    text: "Sopa management",
    size: SizeType.large,
  }
}
