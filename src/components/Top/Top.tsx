import React, { FC, memo } from 'react';
import styled from '@emotion/styled';

import { Legend, LegendProps } from './Legend';
import { GameName, GameNameProps } from './GameName';

export type TopComponentType = LegendProps & GameNameProps;

export const Top: FC<LegendProps & GameNameProps> = memo(
  ({ name, ...legendProps }) => (
    <Header>
      <GameName name={name} />
      <Legend {...legendProps} />
    </Header>
  ),
);

// // Define the type for the component props
// export type TopComponentType = LegendProps & {
//   children?: React.ReactNode; // Include children if needed
// };

// export const Top: FC<LegendProps> = memo(({ children, ...legendProps }) => (
//   <Header>
//     <GameName>{children}</GameName>
//     <Legend {...legendProps} />
//   </Header>
// ));

// Stryker disable next-line StringLiteral
Top.displayName = 'Top';

const Header = styled.header`
  text-align: center;
  position: relative;
  display: inline-block;
`;
