import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const RamenDining = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M9 6H8V4.65l1-.12V6zm0 6H8V7h1v5zM6 7h1v5H6V7zm0-2.12 1-.12V6H6V4.88zM22 3V2L5 4v8H2c0 3.69 2.47 6.86 6 8.25V22h8v-1.75c3.53-1.39 6-4.56 6-8.25H10V7h12V6H10V4.41L22 3z" />
    </Svg>
);

export default RamenDining;
