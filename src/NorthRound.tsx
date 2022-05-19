import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const NorthRound = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M5.71 9.7c.39.39 1.02.39 1.41 0L11 5.83V21c0 .55.45 1 1 1s1-.45 1-1V5.83l3.88 3.88c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L12.7 2.7a.9959.9959 0 0 0-1.41 0L5.71 8.29c-.39.39-.39 1.03 0 1.41z" />
    </Svg>
);

export default NorthRound;