import * as React from 'react';
import Svg, {Path, Circle} from 'react-native-svg';
export const HandIcon = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={13}
    height={197}
    fill="none"
    {...props}>
    <Path fill="#fff" d="m6.5.427 6 98H.5l6-98Z" />
    <Circle cx={6.5} cy={98.427} r={6} fill="#fff" />
  </Svg>
);

export const ShareIcon = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={14}
    height={18}
    fill="none"
    {...props}>
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.25}
      d="M10.125 6.5h1.563a1.563 1.563 0 0 1 1.562 1.563v7.5a1.563 1.563 0 0 1-1.563 1.562H2.313A1.563 1.563 0 0 1 .75 15.562v-7.5A1.562 1.562 0 0 1 2.313 6.5h1.562m6.25-2.5L7 .875m0 0L3.875 4M7 .875v10.664"
    />
  </Svg>
);

export const CloseIcon = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    {...props}>
    <Path
      fill="#fff"
      d="M2.336 2.004a1.143 1.143 0 0 1 1.618 0L10 8.053l6.047-6.05a1.144 1.144 0 1 1 1.618 1.619l-6.05 6.046 6.05 6.047a1.143 1.143 0 0 1-.81 1.953 1.144 1.144 0 0 1-.808-.335L10 11.283l-6.046 6.05a1.145 1.145 0 0 1-1.618-1.618l6.049-6.047-6.05-6.046a1.143 1.143 0 0 1 0-1.618Z"
    />
  </Svg>
);
