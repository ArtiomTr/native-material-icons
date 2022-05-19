import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const WindowTwoTone = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M4 4h7v7H4zm0 9h7v7H4zm9 0h7v7h-7zm0-9h7v7h-7z" opacity={0.3} />
        <Path d="M20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-9 18H4v-7h7v7zm0-9H4V4h7v7zm9 9h-7v-7h7v7zm0-9h-7V4h7v7z" />
    </Svg>
);

export default WindowTwoTone;