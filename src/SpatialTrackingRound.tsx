import * as React from 'react';
import Svg, { SvgProps, Circle, Path } from 'react-native-svg';

const SpatialTrackingRound = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Circle cx={10} cy={9} r={4} />
        <Path d="M16.39 15.56C14.71 14.7 12.53 14 10 14s-4.71.7-6.39 1.56C2.61 16.07 2 17.1 2 18.22V21h16v-2.78c0-1.12-.61-2.15-1.61-2.66zm3-13.8c-.43-.43-1.14-.39-1.51.09-1.5 1.93-3.35 6.72 0 11.03.37.48 1.08.52 1.5.09.35-.35.39-.91.09-1.3-1.17-1.5-2.64-5.23 0-8.61.31-.39.27-.95-.08-1.3zm3.01 4.1c.23-.4.19-.9-.14-1.22-.47-.48-1.26-.37-1.59.21-1.15 2-.57 4.03.01 5.04.33.57 1.11.67 1.58.21.33-.33.36-.84.13-1.25-.25-.44-.74-1.69.01-2.99z" />
    </Svg>
);

export default SpatialTrackingRound;
