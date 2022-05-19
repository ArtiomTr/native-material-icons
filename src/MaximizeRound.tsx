import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const MaximizeRound = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M4 3h16c.55 0 1 .45 1 1s-.45 1-1 1H4c-.55 0-1-.45-1-1s.45-1 1-1z" />
    </Svg>
);

export default MaximizeRound;
