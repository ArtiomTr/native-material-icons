import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const AdfScannerSharp = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M22 12h-4V4H6v8H2v8h20v-8zm-6 0H8V6h8v6zm2 5c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z" />
    </Svg>
);

export default AdfScannerSharp;
