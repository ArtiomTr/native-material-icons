import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const CallMissedOutgoingOutlined = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="m3 8.41 9 9 7-7V15h2V7h-8v2h4.59L12 14.59 4.41 7 3 8.41z" />
    </Svg>
);

export default CallMissedOutgoingOutlined;