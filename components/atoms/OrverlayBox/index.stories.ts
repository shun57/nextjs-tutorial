import type { Meta, StoryObj } from '@storybook/react';

import OverlayBox from './index';

const meta: Meta<typeof OverlayBox> = {
  title: 'Atoms/OverlayBox',
  component: OverlayBox,
};

export default meta;
type Story = StoryObj<typeof OverlayBox>;

export const Default: Story = {
  args: {
    children: "Test"
  },
};