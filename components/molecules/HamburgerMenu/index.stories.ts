import type { Meta, StoryObj } from '@storybook/react';

import HamburgerMenu from './index';

const meta: Meta<typeof HamburgerMenu> = {
  title: 'Molecules/HamburgerMenu',
  component: HamburgerMenu,
};

export default meta;
type Story = StoryObj<typeof HamburgerMenu>;

export const Default: Story = {
  args: {
    isVisible: true,
  },
};