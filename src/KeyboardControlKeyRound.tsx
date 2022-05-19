import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const KeyboardControlKeyRound = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M5.71 12.71c.39.39 1.02.39 1.41 0L12 7.83l4.88 4.88c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L12.7 5.71a.9959.9959 0 0 0-1.41 0L5.7 11.3c-.38.38-.38 1.02.01 1.41z" />
    </Svg>
);

export default KeyboardControlKeyRound;