import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const SchemaSharp = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M14 9v2h-3V9H8.5V7H11V1H4v6h2.5v2H4v6h2.5v2H4v6h7v-6H8.5v-2H11v-2h3v2h7V9h-7z" />
    </Svg>
);

export default SchemaSharp;