import type { Meta, StoryObj } from '@storybook/react';

import MainProducts from './index';

const meta: Meta<typeof MainProducts> = {
  title: 'Organisms/MainProducts',
  component: MainProducts,
};

export default meta;
type Story = StoryObj<typeof MainProducts>;

export const Default: Story = {
  args: {
  },
};