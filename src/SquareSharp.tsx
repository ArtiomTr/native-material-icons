import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const SquareSharp = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M3 3h18v18H3z" />
    </Svg>
);

export default SquareSharp;