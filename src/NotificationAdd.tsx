import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const NotificationAdd = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M10 20h4c0 1.1-.9 2-2 2s-2-.9-2-2zm4-11c0 2.61 1.67 4.83 4 5.66V17h2v2H4v-2h2v-7c0-2.79 1.91-5.14 4.5-5.8v-.7c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v.7c.71.18 1.36.49 1.95.9C14.54 6.14 14 7.51 14 9zm10-1h-3V5h-2v3h-3v2h3v3h2v-3h3V8z" />
    </Svg>
);

export default NotificationAdd;
