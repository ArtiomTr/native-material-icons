import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const SignalWifiBadRound = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M23.21 8.24C20.22 5.6 16.3 4 12 4 7.7 4 3.78 5.6.79 8.24.35 8.63.32 9.3.73 9.71l10.56 10.58c.19.19.45.29.7.29V14c0-1.1.9-2 2-2h6.99l2.29-2.29c.41-.41.38-1.08-.06-1.47z" />
        <Path d="M20.3 14.71a.9959.9959 0 0 0-1.41 0l-1.39 1.38-1.39-1.38a.9959.9959 0 0 0-1.41 0c-.39.39-.39 1.02 0 1.41l1.39 1.39-1.39 1.39c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0l1.39-1.38 1.39 1.38c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41l-1.38-1.39 1.38-1.39c.39-.39.39-1.02 0-1.41z" />
    </Svg>
);

export default SignalWifiBadRound;