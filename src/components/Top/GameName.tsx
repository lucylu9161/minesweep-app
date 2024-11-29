import styled from '@emotion/styled';
import React from 'react'; // Ensure this line is present

export interface GameNameProps {
  /**
   * Feature that should be activated after first+second actions
   */
  name: string;
}

export const GameName: React.FC<GameNameProps> = ({ name }) => {
  return <h1>{name}</h1>;
};

// export interface GameNameProps {
//   /**
//    * Feature that should be activated after first+second actions
//    */
//   children: string;
// }

// export const GameName = styled.h1`
//   font-size: 2em;
// `;
