import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const DesktopWindowsSharp = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M23 2H1v16h9v2H8v2h8v-2h-2v-2h9V2zm-2 14H3V4h18v12z" />
    </Svg>
);

export default DesktopWindowsSharp;