import type { Meta, StoryObj } from '@storybook/react';

import NaviBar from './index';

const meta: Meta<typeof NaviBar> = {
  title: 'Molecules/NaviBar',
  component: NaviBar,
};

export default meta;
type Story = StoryObj<typeof NaviBar>;

export const Default: Story = {
  args: {
  },
};