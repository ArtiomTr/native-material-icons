import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const TurnLeftSharp = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="m6.83 11 1.58 1.59L7 14l-4-4 4-4 1.41 1.41L6.83 9H17v11h-2v-9z" />
    </Svg>
);

export default TurnLeftSharp;
