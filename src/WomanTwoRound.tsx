import * as React from 'react';
import Svg, { SvgProps, Path, Circle } from 'react-native-svg';

const WomanTwoRound = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M13.94 8.31c-.38-.96-1.42-1.52-2.48-1.24-.66.17-1.18.7-1.43 1.34l-2.48 6.22c-.27.66.22 1.37.92 1.37h2.03v5c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-5h2.03c.71 0 1.19-.71.93-1.37l-2.52-6.32z" />
        <Circle cx={12} cy={4} r={2} />
    </Svg>
);

export default WomanTwoRound;