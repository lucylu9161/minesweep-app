import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { GameName, GameNameProps } from './GameName';

export default {
  title: 'Top/GameName',
  component: GameName,
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

const Template: StoryFn<GameNameProps> = (args) => <GameName {...args} />;

export const MinesweeperGameName = Template.bind({});
MinesweeperGameName.args = {
  name: 'minesweeper',
};

// export const MinesweeperGameName = Template.bind({});
// MinesweeperGameName.args = {
//   children: 'minesweeper',
// };
