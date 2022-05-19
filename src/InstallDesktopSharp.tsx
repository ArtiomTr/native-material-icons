import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const InstallDesktopSharp = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M20 17H4V5h8V3H2v16h6v2h8v-2h6v-5h-2z" />
        <Path d="m17 14 5-5-1.41-1.41L18 10.17V3h-2v7.17l-2.59-2.58L12 9z" />
    </Svg>
);

export default InstallDesktopSharp;
