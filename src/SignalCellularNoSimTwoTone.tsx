import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const SignalCellularNoSimTwoTone = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M10.83 5 9.36 6.47 17 14.11V5zM7 9.79V19h9.23z" opacity={0.3} />
        <Path d="M10.83 5H17v9.11l2 2V5c0-1.1-.9-2-2-2h-7L7.94 5.06l1.42 1.42L10.83 5zm10.43 16.21L3.79 3.74 2.38 5.15 5 7.77V19c0 1.11.9 2 2 2h11.23l1.62 1.62 1.41-1.41zM7 19V9.79L16.23 19H7z" />
    </Svg>
);

export default SignalCellularNoSimTwoTone;
