import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const StopCircleSharp = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4 14H8V8h8v8z" />
    </Svg>
);

export default StopCircleSharp;