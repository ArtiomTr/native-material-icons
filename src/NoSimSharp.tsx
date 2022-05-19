import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const NoSimSharp = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M3.79 3.74 2.38 5.15l2.74 2.74-.12.12V21h13.27l1.58 1.62 1.41-1.41zM19 16.11V3h-8.99L7.95 5.06z" />
    </Svg>
);

export default NoSimSharp;
