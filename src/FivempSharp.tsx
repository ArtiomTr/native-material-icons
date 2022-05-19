import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const FivempSharp = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M15 14h1.5v1.5H15z" />
        <Path d="M3 3v18h18V3H3zm7 7h3V9h-3V5.5h4.5V7h-3v1h3v3.5H10V10zm2.5 8.5H11V14h-1v3H8.5v-3h-1v4.5H6v-6h6.5v6zM18 17h-3v1.5h-1.5v-6H18V17z" />
    </Svg>
);

export default FivempSharp;