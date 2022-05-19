import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const SouthEastRound = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M18 9c-.56 0-1 .45-1 1v5.59L6.12 4.7a.9959.9959 0 0 0-1.41 0c-.39.39-.39 1.02 0 1.41L15.59 17H10c-.55 0-1 .45-1 1s.45 1 1 1h8c.55 0 1-.45 1-1v-8c0-.55-.45-1-1-1z" />
    </Svg>
);

export default SouthEastRound;