import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const SegmentTwoTone = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M9 18h12v-2H9v2zM3 6v2h18V6H3zm6 7h12v-2H9v2z" />
    </Svg>
);

export default SegmentTwoTone;