import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const WidthWideSharp = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M22 4H2v16h20V4zM4 6h2v12H4V6zm16 12h-2V6h2v12z" />
    </Svg>
);

export default WidthWideSharp;