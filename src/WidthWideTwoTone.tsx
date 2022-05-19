import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const WidthWideTwoTone = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M8 6h8v12H8z" opacity={0.3} />
        <Path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM6 18H4V6h2v12zm10 0H8V6h8v12zm4 0h-2V6h2v12z" />
    </Svg>
);

export default WidthWideTwoTone;
