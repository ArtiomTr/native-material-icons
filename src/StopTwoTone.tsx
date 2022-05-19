import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const StopTwoTone = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M8 8h8v8H8z" opacity={0.3} />
        <Path d="M6 18h12V6H6v12zM8 8h8v8H8V8z" />
    </Svg>
);

export default StopTwoTone;
