import type { Meta, StoryObj } from '@storybook/react';

import ProductImage from './index';

const meta: Meta<typeof ProductImage> = {
  title: 'Molecules/ProductImage',
  component: ProductImage,
};

export default meta;
type Story = StoryObj<typeof ProductImage>;

export const Default: Story = {
  args: {
    imageUrl: "/images/sticker-rainbow.avif",
    productName: "Acme Rainbow Sticker",
    price: "15.00",
  },
};