import type { Meta, StoryObj } from '@storybook/react';

import CommonButton from './index';

const meta: Meta<typeof CommonButton> = {
  title: 'Atoms/CommonButton',
  component: CommonButton,
};

export default meta;
type Story = StoryObj<typeof CommonButton>;

export const Application: Story = {
  args: {
    color: 'blue',
    size: 'medium',
    disabled: false,
    children: '応募する',
  },
};

export const Delete: Story = {
  args: {
    color: 'red',
    size: 'small',
    disabled: false,
    children: '削除する',
  },
};

export const DeleteDisabled: Story = {
  args: {
    color: 'red',
    size: 'small',
    disabled: true,
    children: '削除する',
  },
};
