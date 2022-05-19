import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const FivegSharp = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M17 13h2v2h-5V9h7V7h-9v10h9v-6h-4zM3 13h5v2H3v2h7v-6H5V9h5V7H3z" />
    </Svg>
);

export default FivegSharp;
