import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const NetworkPingRound = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M2.71 6.79c-.39.39-.39 1.02 0 1.41L10.5 16H5c-.55 0-1 .45-1 1s.45 1 1 1h14c.55 0 1-.45 1-1s-.45-1-1-1h-5.5l5.15-5.15c.26.1.55.15.85.15 1.38 0 2.5-1.12 2.5-2.5S20.88 6 19.5 6 17 7.12 17 8.5c0 .35.07.67.2.97l-5.2 5.2-7.88-7.88a.9959.9959 0 0 0-1.41 0z" />
    </Svg>
);

export default NetworkPingRound;