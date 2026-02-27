import type { Meta, StoryObj } from '@storybook/react';
import { FillText } from './filltext';

const meta: Meta<typeof FillText> = {
  title: 'Typography/FillText',
  component: FillText,
  tags: ['autodocs'],
  argTypes: {
    baseColor: { control: 'color' },
    fillColor: { control: 'color' },
    duration: { control: 'number' },
  },
};

export default meta;
type Story = StoryObj<typeof FillText>;

export const PinkWaterFlow: Story = {
  args: {
    text: "Kaushal",
    baseColor: '#ffb3c6',
    fillColor: '#ff0054',
    size: '7rem',
    duration: 5987,
  },
};

export const DeepOcean: Story = {
  args: {
    text: 'SYSTEM',
    baseColor: '#bae6fd',
    fillColor: '#0284c7',
    size: '6rem',
    duration: 2500,
  },
};