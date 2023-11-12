import type { Meta, StoryObj } from '@storybook/react';

import Button from './index';

const meta: Meta<typeof Button> = {
  title: 'Atoms/Button',
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    type: 'submit',
    children: 'Button',
  },
};