import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const OutboundRound = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1.88 9.54-4.25 4.25c-.39.39-1.02.39-1.41 0a.9959.9959 0 0 1 0-1.41l4.25-4.25-1.27-1.27c-.32-.32-.09-.86.35-.86h3.94c.28 0 .5.22.5.5v3.94c0 .45-.54.67-.85.35l-1.26-1.25z" />
    </Svg>
);

export default OutboundRound;
