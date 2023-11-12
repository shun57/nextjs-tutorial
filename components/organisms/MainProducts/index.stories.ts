import type { Meta, StoryObj } from '@storybook/react';

import MainProducts from './index';

const meta: Meta<typeof MainProducts> = {
  title: 'Organisms/MainProducts',
  component: MainProducts,
};

export default meta;
type Story = StoryObj<typeof MainProducts>;

const items = [
  {
    link: "/",
    imageUrl: "/images/t-shirt-color-beige.avif",
    name: "Item 1",
    price: "20.00",
  },
  {
    link: "/",
    imageUrl: "/images/cup-black.avif",
    name: "Item 2",
    price: "15.00",
  },
  {
    link: "/",
    imageUrl: "/images/sticker-rainbow.avif",
    name: "Item 3",
    price: "4.00",
  },
];

export const Default: Story = {
  args: {
    products: items
  },
};