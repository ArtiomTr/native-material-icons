import * as React from 'react';
import Svg, { SvgProps, Circle, Path } from 'react-native-svg';

const CameraAltSharp = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Circle cx={12} cy={12} r={3} />
        <Path d="M16.83 4 15 2H9L7.17 4H2v16h20V4h-5.17zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z" />
    </Svg>
);

export default CameraAltSharp;
