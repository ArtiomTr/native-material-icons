import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const WbShade = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M14 12v2.5l5.5 5.5H22zm0 8h3l-3-3zM8 4l-6 6h2v10h8V10h2L8 4zm1 10H7v-4h2v4z" />
    </Svg>
);

export default WbShade;