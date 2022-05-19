import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const StayCurrentLandscapeTwoTone = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M5 7h14v10H5z" opacity={0.3} />
        <Path d="M21 5H3c-1.1 0-1.99.9-1.99 2L1 17c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm-2 12H5V7h14v10z" />
    </Svg>
);

export default StayCurrentLandscapeTwoTone;