import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const SmartDisplaySharp = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M22 4H2v16h20V4zM9.5 16.5v-9l7 4.5-7 4.5z" />
    </Svg>
);

export default SmartDisplaySharp;
