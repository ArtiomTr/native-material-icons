import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const SaveAltSharp = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M19 12v7H5v-7H3v9h18v-9h-2zm-6 .67 2.59-2.58L17 11.5l-5 5-5-5 1.41-1.41L11 12.67V3h2v9.67z" />
    </Svg>
);

export default SaveAltSharp;