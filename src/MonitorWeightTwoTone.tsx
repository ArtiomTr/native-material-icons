import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const MonitorWeightTwoTone = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M13 8.5h1v1h-1zm-3 0h1v1h-1zm1.5 0h1v1h-1z" opacity={0.3} />
        <Path d="M5 19h14V5H5v14zm7-13c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3z" opacity={0.3} />
        <Path d="M12 12c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3 1.34 3 3 3zm1-3.5h1v1h-1v-1zm-1.5 0h1v1h-1v-1zm-1.5 0h1v1h-1v-1z" />
        <Path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z" />
    </Svg>
);

export default MonitorWeightTwoTone;
