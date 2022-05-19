import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const HourglassBottomOutlined = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="m18 22-.01-6L14 12l3.99-4.01L18 2H6v6l4 4-4 3.99V22h12zM8 7.5V4h8v3.5l-4 4-4-4z" />
    </Svg>
);

export default HourglassBottomOutlined;
