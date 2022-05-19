import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const DashboardCustomizeSharp = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M3 3h8v8H3V3zm10 0h8v8h-8V3zM3 13h8v8H3v-8zm15 0h-2v3h-3v2h3v3h2v-3h3v-2h-3v-3z" />
    </Svg>
);

export default DashboardCustomizeSharp;
