import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const NinekSharp = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M8 10h1.5v1.5H8V10zm13-7H3v18h18V3zM11 9v6H6.5v-1.5h3v-1h-3V9H11zm7 6h-1.75l-1.75-2.25V15H13V9h1.5v2.25L16.25 9H18l-2.25 3L18 15z" />
    </Svg>
);

export default NinekSharp;
