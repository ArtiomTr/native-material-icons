import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const HourglassTop = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="m6 2 .01 6L10 12l-3.99 4.01L6 22h12v-6l-4-4 4-3.99V2H6zm10 14.5V20H8v-3.5l4-4 4 4z" />
    </Svg>
);

export default HourglassTop;
