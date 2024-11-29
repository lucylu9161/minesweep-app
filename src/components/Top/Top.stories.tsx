import React from 'react';
import { StoryFn, Meta } from '@storybook/react';

import { Top, TopComponentType } from './Top';

export default {
  title: 'Top/Top',
  component: Top,
  parameters: {
    layout: 'centered', // Center the component in the Canvas
  },
  tags: ['autodocs'], // Automatically generate documentation
  argTypes: {
    feature: { control: 'text' }, // Control for feature prop
    firstAction: { control: 'text' }, // Control for firstAction prop
    secondAction: { control: 'text' }, // Control for secondAction prop
  },
} as Meta;

const Template: StoryFn<TopComponentType> = (args) => <Top {...args} />;

export const TopPanel = Template.bind({});
TopPanel.args = {
  name: 'minesweeper',
  feature: 'Flag',
  firstAction: 'ctrl',
  secondAction: 'click',
};

// TopPanel.args = {
//   children: 'minesweeper',
//   feature: 'Flag',
//   firstAction: 'ctrl',
//   secondAction: 'click',
// };
