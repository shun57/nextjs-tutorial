import type { Meta, StoryObj } from '@storybook/react';

import CookieConsentDialog from './index';

const meta: Meta<typeof CookieConsentDialog> = {
  title: 'Molecules/CookieConsentDialog',
  component: CookieConsentDialog,
};

export default meta;
type Story = StoryObj<typeof CookieConsentDialog>;

export const Default: Story = {
  args: {
  },
};