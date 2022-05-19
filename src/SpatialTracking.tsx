import * as React from 'react';
import Svg, { SvgProps, Circle, Path } from 'react-native-svg';

const SpatialTracking = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Circle cx={10} cy={9} r={4} />
        <Path d="M16.39 15.56C14.71 14.7 12.53 14 10 14s-4.71.7-6.39 1.56C2.61 16.07 2 17.1 2 18.22V21h16v-2.78c0-1.12-.61-2.15-1.61-2.66zm3.66-13.15L18.64 1c-3.51 3.51-3.51 9.21 0 12.73l1.41-1.41c-2.73-2.74-2.73-7.18 0-9.91z" />
        <Path d="m22.88 5.24-1.41-1.41c-1.95 1.95-1.95 5.12 0 7.07l1.41-1.41c-1.17-1.17-1.17-3.08 0-4.25z" />
    </Svg>
);

export default SpatialTracking;