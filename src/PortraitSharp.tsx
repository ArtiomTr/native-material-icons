import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const PortraitSharp = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M12 12.25c1.24 0 2.25-1.01 2.25-2.25S13.24 7.75 12 7.75 9.75 8.76 9.75 10s1.01 2.25 2.25 2.25zm4.5 4c0-1.5-3-2.25-4.5-2.25s-4.5.75-4.5 2.25V17h9v-.75zM21 3H3v18h18V3zm-2 16H5V5h14v14z" />
    </Svg>
);

export default PortraitSharp;
