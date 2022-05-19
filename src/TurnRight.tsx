import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const TurnRight = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="m17.17 11-1.59 1.59L17 14l4-4-4-4-1.41 1.41L17.17 9H9c-1.1 0-2 .9-2 2v9h2v-9h8.17z" />
    </Svg>
);

export default TurnRight;
