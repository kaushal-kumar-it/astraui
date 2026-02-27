import type { Meta, StoryObj } from '@storybook/react';
import { ScrambleText } from './ScrambleText';

// Setup the metadata for the Storybook sidebar
const meta: Meta<typeof ScrambleText> = {
  title: 'Typography/ScrambleText',
  component: ScrambleText,
  // This tells Storybook to automatically add documentation for these props
  tags: ['autodocs'], 
};

export default meta;

// Setup a custom type for our stories based on the component
type Story = StoryObj<typeof ScrambleText>;

// Story 1: Fast, intense hacker text
export const Cyberpunk: Story = {
  args: {
    text: 'SYSTEM BREACH DETECTED...',
    speed: 30,
  },
};

// Story 2: Slower, deciphering effect
export const Decrypting: Story = {
  args: {
    text: 'Access Granted: Welcome Admin.',
    speed: 60,
  },
};