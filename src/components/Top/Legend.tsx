import React, { FC } from 'react';
import styled from '@emotion/styled';

// export interface LegendProps {
//   /**
//    * Feature that should be activated after first+second actions
//    */
//   feature: string;
//   /**
//    * First action
//    */
//   firstAction: string;
//   /**
//    * Second action
//    */
//   secondAction?: string;
// }

export type LegendProps = {
  feature: string;
  firstAction: string;
  secondAction: string;
  children?: React.ReactNode; // Add this line to include children
};

export const Legend: FC<LegendProps> = ({
  feature,
  firstAction,
  secondAction,
}) => (
  <Parent>
    <strong>{feature}: </strong>
    <FlagComboParent>
      <FirstAction>{firstAction}</FirstAction>
      {secondAction && <SecondAction> + {secondAction}</SecondAction>}
    </FlagComboParent>
  </Parent>
);

const FlagComboParent = styled.code`
  background: #e3e3e3;
`;

const Parent = styled.legend`
  font-size: 1em;
  margin: 0 auto 2vw;
  line-height: 1.25em;
`;

const FirstAction = styled.span`
  color: #ec433c;
`;

const SecondAction = styled.span`
  color: #2a48ec;
`;
