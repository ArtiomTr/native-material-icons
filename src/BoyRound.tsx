import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const BoyRound = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M12 7.5c.97 0 1.75-.78 1.75-1.75S12.97 4 12 4s-1.75.78-1.75 1.75S11.03 7.5 12 7.5zM14 19c0 .55-.45 1-1 1h-2c-.55 0-1-.45-1-1v-4c-.55 0-1-.45-1-1v-3.5c0-1.1.9-2 2-2h2c1.1 0 2 .9 2 2V14c0 .55-.45 1-1 1v4z" />
    </Svg>
);

export default BoyRound;
