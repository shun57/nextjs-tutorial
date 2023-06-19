import type { Meta, StoryObj } from '@storybook/react';

import CategoryImage from './index';

const meta: Meta<typeof CategoryImage> = {
  title: 'Molecules/CategoryImage',
  component: CategoryImage,
};

export default meta;
type Story = StoryObj<typeof CategoryImage>;

export const Default: Story = {
  args: {
    imageUrl: "/images/mug-1.avif",
    categoryName: "Acme Mug"
  },
};