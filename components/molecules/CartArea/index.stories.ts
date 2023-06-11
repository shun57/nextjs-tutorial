import type { Meta, StoryObj } from '@storybook/react';

import CartArea from './index';

const meta: Meta<typeof CartArea> = {
  title: 'Molecules/CartArea',
  component: CartArea,
};

export default meta;
type Story = StoryObj<typeof CartArea>;

export const Default: Story = {
  args: {
    isVisible: true,
  },
};