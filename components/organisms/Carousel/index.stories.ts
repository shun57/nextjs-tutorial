import type { Meta, StoryObj } from '@storybook/react';

import Carousel from './index';

const meta: Meta<typeof Carousel> = {
  title: 'Organisms/Carousel',
  component: Carousel,
};

export default meta;
type Story = StoryObj<typeof Carousel>;

export const Default: Story = {
  args: {
  },
};