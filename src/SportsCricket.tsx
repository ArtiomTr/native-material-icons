import * as React from 'react';
import Svg, { SvgProps, Path, Circle } from 'react-native-svg';

const SportsCricket = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M15.05 12.81 6.56 4.32a.9959.9959 0 0 0-1.41 0L2.32 7.15c-.39.39-.39 1.02 0 1.41l8.49 8.49c.39.39 1.02.39 1.41 0l2.83-2.83c.39-.39.39-1.02 0-1.41zm-.7088 4.9462 1.4142-1.4142 4.2426 4.2426-1.4142 1.4142z" />
        <Circle cx={18.5} cy={5.5} r={3.5} />
    </Svg>
);

export default SportsCricket;