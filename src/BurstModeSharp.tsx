import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const BurstModeSharp = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M1 5h2v14H1V5zm4 0h2v14H5V5zm18 0H9v14h14V5zM11 17l2.5-3.15L15.29 16l2.5-3.22L21 17H11z" />
    </Svg>
);

export default BurstModeSharp;
