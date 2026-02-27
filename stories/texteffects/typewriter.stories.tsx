import type { Meta, StoryObj } from '@storybook/react';
import { TypewriterText } from './typewriter';

const meta: Meta<typeof TypewriterText> = {
  title: 'Typography/TypewriterText',
  component: TypewriterText,
  tags: ['autodocs'],
  argTypes: {
    textColor: { control: 'color' },
  },
};

export default meta;
type Story = StoryObj<typeof TypewriterText>;

export const DeveloperHero: Story = {
  args: {
    staticText: 'Hi, I am a Developer.',
    words: [
      'I build fast React apps.',
      'I design clean UIs.',
      'I solve complex problems.',
      'I love coffee.'
    ],
    typingSpeed: 80,
    deletingSpeed: 40,
    pauseDuration: 2000,
    textColor: '#00ffcc',
    fontSize: '3rem',
  },
};

export const Minimalist: Story = {
  args: {
    staticText: 'We specialize in',
    words: ['Design.', 'Marketing.', 'Growth.', 'Branding.'],
    typingSpeed: 100,
    deletingSpeed: 50,
    pauseDuration: 1500,
    textColor: '#ffffff',
    fontSize: '4rem',
    fontFamily: '"Inter", sans-serif',
  },
};