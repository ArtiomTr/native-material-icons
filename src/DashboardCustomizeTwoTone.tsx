import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const DashboardCustomizeTwoTone = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M5 15h4v4H5zM5 5h4v4H5zm10 0h4v4h-4z" opacity={0.3} />
        <Path d="M3 11h8V3H3v8zm2-6h4v4H5V5zm8-2v8h8V3h-8zm6 6h-4V5h4v4zM3 21h8v-8H3v8zm2-6h4v4H5v-4zm13-2h-2v3h-3v2h3v3h2v-3h3v-2h-3z" />
    </Svg>
);

export default DashboardCustomizeTwoTone;