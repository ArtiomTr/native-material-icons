import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const TimerOff = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M9 1h6v2H9zm4 7v2.17l6.98 6.98C20.63 15.91 21 14.5 21 13c0-2.12-.74-4.07-1.97-5.61l1.42-1.42c-.43-.51-.9-.99-1.41-1.41l-1.42 1.42C16.07 4.74 14.12 4 12 4c-1.5 0-2.91.37-4.15 1.02L10.83 8H13zM2.81 2.81 1.39 4.22l3.4 3.4C3.67 9.12 3 10.98 3 13c0 4.97 4.02 9 9 9 2.02 0 3.88-.67 5.38-1.79l2.4 2.4 1.41-1.41L2.81 2.81z" />
    </Svg>
);

export default TimerOff;
