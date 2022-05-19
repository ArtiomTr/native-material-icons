import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const SendTimeExtensionSharp = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M20 4h-6c0-1.38-1.12-2.5-2.5-2.5S9 2.62 9 4H3.01v5.8C5.7 9.8 6 11.96 6 12.5s-.29 2.7-3 2.7V21h5.8c0-2.16 1.37-2.78 2.2-2.94v-9.3l9 4.5V4z" />
        <Path d="M13 12v4l4 1-4 1v4l10-5z" />
    </Svg>
);

export default SendTimeExtensionSharp;
