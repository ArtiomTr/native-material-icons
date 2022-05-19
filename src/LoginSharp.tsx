import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const LoginSharp = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M11 7 9.6 8.4l2.6 2.6H2v2h10.2l-2.6 2.6L11 17l5-5-5-5zm9 12h-8v2h10V3H12v2h8v14z" />
    </Svg>
);

export default LoginSharp;