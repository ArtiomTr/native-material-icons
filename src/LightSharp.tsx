import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const LightSharp = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M13 6.06V3h-2v3.06C5.87 6.63 2.03 11.51 3.22 17H8c0 2.21 1.79 4 4 4s4-1.79 4-4h4.78A9.0056 9.0056 0 0 0 13 6.06zM12 15H5c0-3.86 3.14-7 7-7s7 3.14 7 7h-7z" />
    </Svg>
);

export default LightSharp;
