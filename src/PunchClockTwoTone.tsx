import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const PunchClockTwoTone = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M8 3h8v3H8zM5 20h14V8H5v12zm7-11c2.76 0 5 2.24 5 5s-2.24 5-5 5-5-2.24-5-5 2.24-5 5-5z" opacity={0.3} />
        <Path d="M19 6h-1V1H6v5H5c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zM8 3h8v3H8V3zm11 17H5V8h14v12z" />
        <Path d="M12 19c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm0-8.5c1.93 0 3.5 1.57 3.5 3.5s-1.57 3.5-3.5 3.5-3.5-1.57-3.5-3.5 1.57-3.5 3.5-3.5z" />
        <Path d="m13.85 15.14-1.35-1.35V11.5h-1v2.71l1.64 1.64z" />
    </Svg>
);

export default PunchClockTwoTone;