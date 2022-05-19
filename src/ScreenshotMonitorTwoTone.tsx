import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const ScreenshotMonitorTwoTone = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M4 17h16V5H4v12zm11-2.5h2.5V12H19v4h-4v-1.5zM5 6h4v1.5H6.5V10H5V6z" opacity={0.3} />
        <Path d="M20 3H4c-1.11 0-2 .89-2 2v12c0 1.1.89 2 2 2h4v2h8v-2h4c1.1 0 2-.9 2-2V5c0-1.11-.9-2-2-2zm0 14H4V5h16v12z" />
        <Path d="M6.5 7.5H9V6H5v4h1.5zM19 12h-1.5v2.5H15V16h4z" />
    </Svg>
);

export default ScreenshotMonitorTwoTone;