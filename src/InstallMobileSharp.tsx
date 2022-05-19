import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const InstallMobileSharp = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M17 18H7V6h7V1H5v22h14v-7h-2z" />
        <Path d="m18 14 5-5-1.41-1.41L19 10.17V3h-2v7.17l-2.59-2.58L13 9z" />
    </Svg>
);

export default InstallMobileSharp;
