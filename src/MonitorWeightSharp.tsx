import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const MonitorWeightSharp = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M21 3H3v18h18V3zm-6.8 8.2c-3.23 2.43-6.84-1.18-4.4-4.41 3.23-2.42 6.83 1.19 4.4 4.41z" />
        <Path d="M10 8.5h1v1h-1zm1.5 0h1v1h-1zm1.5 0h1v1h-1z" />
    </Svg>
);

export default MonitorWeightSharp;
