import * as React from 'react';
import Svg, { SvgProps, Path, Circle } from 'react-native-svg';

const ManTwoRound = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M14 7h-4c-1.1 0-2 .9-2 2v5c0 .55.45 1 1 1h1.5v5.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V15H15c.55 0 1-.45 1-1V9c0-1.1-.9-2-2-2z" />
        <Circle cx={12} cy={4} r={2} />
    </Svg>
);

export default ManTwoRound;
