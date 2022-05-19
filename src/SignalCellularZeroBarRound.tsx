import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const SignalCellularZeroBarRound = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M4.41 22H21c.55 0 1-.45 1-1V4.41c0-.89-1.08-1.34-1.71-.71L3.71 20.29c-.63.63-.19 1.71.7 1.71zM20 20H6.83L20 6.83V20z" />
    </Svg>
);

export default SignalCellularZeroBarRound;
