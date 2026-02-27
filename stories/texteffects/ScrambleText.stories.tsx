import type { Meta, StoryObj } from '@storybook/react';
import { ScrambleText } from './ScrambleText';

const meta: Meta<typeof ScrambleText> = {
  title: 'Typography/ScrambleText',
  component: ScrambleText,
  tags: ['autodocs'],
  argTypes: {
    color: { control: 'color' },
    fontFamily: {
      control: 'select',
      options: [
        '"Space Grotesk", sans-serif',
        '"Inter", sans-serif',
        '"Fira Code", monospace',
        '"Geist", sans-serif',
        'system-ui'
      ],
    },
  },
};

export default meta;
type Story = StoryObj<typeof ScrambleText>;

export const ModernCyberpunk: Story = {
  args: {
    text: 'SYSTEM BREACH DETECTED...',
    speed: 30,
    color: '#00ffcc',
    size: '2rem',
    fontFamily: '"Space Grotesk", sans-serif',
    glow: true,
  },
};

export const CleanMinimalist: Story = {
  args: {
    text: 'Welcome to the dashboard.',
    speed: 40,
    color: '#ffffff',
    size: '2.5rem',
    fontFamily: '"Inter", sans-serif',
    glow: false,
  },
};