import * as React from 'react';
import Svg, { SvgProps, Circle, Path } from 'react-native-svg';

const SpatialAudioOff = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Circle cx={10} cy={9} r={4} />
        <Path d="M16.39 15.56C14.71 14.7 12.53 14 10 14s-4.71.7-6.39 1.56C2.61 16.07 2 17.1 2 18.22V21h16v-2.78c0-1.12-.61-2.15-1.61-2.66zM20.36 1l-1.41 1.41c2.73 2.73 2.73 7.17 0 9.9l1.41 1.41c3.52-3.51 3.52-9.21 0-12.72z" />
        <Path d="M17.54 10.9c1.95-1.95 1.95-5.12 0-7.07l-1.41 1.41c1.17 1.17 1.17 3.07 0 4.24l1.41 1.42z" />
    </Svg>
);

export default SpatialAudioOff;