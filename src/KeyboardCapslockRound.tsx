import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const KeyboardCapslockRound = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="m12 8.41 3.89 3.89c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L12.71 6.3a.9959.9959 0 0 0-1.41 0l-4.6 4.59c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L12 8.41zM7 18h10c.55 0 1-.45 1-1s-.45-1-1-1H7c-.55 0-1 .45-1 1s.45 1 1 1z" />
    </Svg>
);

export default KeyboardCapslockRound;