import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const ScannerSharp = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="m4.2 5-.7 1.9L17.6 12H3v8h18v-8.86L4.2 5zM7 17H5v-2h2v2zm12 0H9v-2h10v2z" />
    </Svg>
);

export default ScannerSharp;