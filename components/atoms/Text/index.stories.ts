import type { Meta, StoryObj } from '@storybook/react';

import Text from './index';

const meta: Meta<typeof Text> = {
  title: 'Atoms/Text',
  component: Text,
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Default: Story = {
  args: {
    children: "p"
  },
};

export const H1: Story = {
  args: {
    variant: "h1",
    children: "h1"
  },
};