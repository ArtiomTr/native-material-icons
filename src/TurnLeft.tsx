import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const TurnLeft = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="m6.83 11 1.59 1.59L7 14l-4-4 4-4 1.41 1.41L6.83 9H15c1.1 0 2 .9 2 2v9h-2v-9H6.83z" />
    </Svg>
);

export default TurnLeft;
