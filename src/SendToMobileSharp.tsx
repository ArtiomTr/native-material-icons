import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const SendToMobileSharp = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M17 18H7V6h10v1h2V1H5v22h14v-6h-2z" />
        <Path d="m22 12-4-4v3h-5v2h5v3z" />
    </Svg>
);

export default SendToMobileSharp;
