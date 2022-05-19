import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const MailLockSharp = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M22 9.97V4H2.01L2 20h14v-5.03c0-2.76 2.24-5 5-5h1zM20 8l-8 5-8-5V6l8 5 8-5v2z" />
        <Path d="M23 15v-.89c0-1-.68-1.92-1.66-2.08-1.26-.21-2.34.76-2.34 1.97v1h-1v5h6v-5h-1zm-1 0h-2v-1c0-.55.45-1 1-1s1 .45 1 1v1z" />
    </Svg>
);

export default MailLockSharp;