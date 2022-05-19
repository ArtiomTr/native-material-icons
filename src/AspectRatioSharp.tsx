import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const AspectRatioSharp = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M19 12h-2v3h-3v2h5v-5zM7 9h3V7H5v5h2V9zm16-6H1v18h22V3zm-2 16.01H3V4.99h18v14.02z" />
    </Svg>
);

export default AspectRatioSharp;