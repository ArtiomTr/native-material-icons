import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const AirlinesRound = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M19.59 4h-5.01c-.99 0-1.91.49-2.47 1.3L2 20h17l2.56-13.63C21.79 5.14 20.84 4 19.59 4zM14.5 14c-1.38 0-2.5-1.12-2.5-2.5S13.12 9 14.5 9s2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
    </Svg>
);

export default AirlinesRound;