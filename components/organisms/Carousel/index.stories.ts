import type { Meta, StoryObj } from '@storybook/react';

import Carousel from './index';

const meta: Meta<typeof Carousel> = {
  title: 'Organisms/Carousel',
  component: Carousel,
};

export default meta;
type Story = StoryObj<typeof Carousel>;

const items = [
  {
    link: "/",
    imageUrl: "/images/mug-1.avif",
    name: "Item 1",
  },
  {
    link: "/",
    imageUrl: "/images/hoodie-1.avif",
    name: "Item 2",
  },
  {
    link: "/",
    imageUrl: "/images/baby-onesie-beige-1.avif",
    name: "Item 3",
  },
];

export const Default: Story = {
  args: {
    categories: items
  },
};