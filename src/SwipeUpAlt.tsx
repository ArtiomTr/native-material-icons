import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const SwipeUpAlt = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="m13 5.83 1.59 1.59L16 6l-4-4-4 4 1.41 1.41L11 5.83v4.27c-2.28.46-4 2.48-4 4.9 0 2.76 2.24 5 5 5s5-2.24 5-5c0-2.42-1.72-4.44-4-4.9V5.83z" />
    </Svg>
);

export default SwipeUpAlt;
