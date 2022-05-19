import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const PowerSharp = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M16 7V3h-2v4h-4V3H8v4H6v7.5L9.5 18v3h5v-3l3.5-3.51V7h-2z" />
    </Svg>
);

export default PowerSharp;