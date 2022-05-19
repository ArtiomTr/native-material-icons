import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const PinchSharp = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M23.18 15.4 22.1 23h-9L8 17.62l1.22-1.23 3.78.85V6.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v6h1.38l5.8 2.9zM6 2.5V1h5v5H9.5V3.56L3.56 9.5H6V11H1V6h1.5v2.44L8.44 2.5H6z" />
    </Svg>
);

export default PinchSharp;
