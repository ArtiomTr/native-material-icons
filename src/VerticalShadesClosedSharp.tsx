import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const VerticalShadesClosedSharp = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M20 19V3H4v16H2v2h20v-2h-2zM13 5h1.5v14H13V5zm-2 14H9.5V5H11v14zM6 5h1.5v14H6V5zm10.5 14V5H18v14h-1.5z" />
    </Svg>
);

export default VerticalShadesClosedSharp;
