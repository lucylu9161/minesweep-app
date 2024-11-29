import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { Legend, LegendProps } from './Legend';

export default {
  title: 'Top/Legend',
  component: Legend,
  // parameters: {
  //   docs: {
  //     description: {
  //       component: 'This is the Legend component that displays game legends.',
  //     },
  //   },
  // },

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

const Template: StoryFn<LegendProps> = (args) => <Legend {...args} />;

export const GameLegend = Template.bind({});
GameLegend.args = {
  feature: 'Flag',
  firstAction: 'ctrl',
  secondAction: 'click',
};
