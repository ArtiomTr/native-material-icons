import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const MailOutlineSharp = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M22 4H2.01L2 20h20V4zm-2 14H4V8l8 5 8-5v10zm-8-7L4 6h16l-8 5z" />
    </Svg>
);

export default MailOutlineSharp;