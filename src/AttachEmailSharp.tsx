import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const AttachEmailSharp = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M21 10V2H1v16h13v-5c0-1.66 1.34-3 3-3h4zm-10 1L3 6V4l8 5 8-5v2l-8 5z" />
        <Path d="M21 14v4c0 1.1-.9 2-2 2s-2-.9-2-2v-4.5c0-.28.22-.5.5-.5s.5.22.5.5V18h2v-4.5c0-1.38-1.12-2.5-2.5-2.5S15 12.12 15 13.5V18c0 2.21 1.79 4 4 4s4-1.79 4-4v-4h-2z" />
    </Svg>
);

export default AttachEmailSharp;
