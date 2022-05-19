import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const MessageSharp = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M22 2H2.01L2 22l4-4h16V2zm-4 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z" />
    </Svg>
);

export default MessageSharp;