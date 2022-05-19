import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const BatteryFullSharp = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M17 4h-3V2h-4v2H7v18h10V4z" />
    </Svg>
);

export default BatteryFullSharp;