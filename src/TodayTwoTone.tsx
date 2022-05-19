import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const TodayTwoTone = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V9h14v10zm0-12H5V5h14v2zm-7 4H7v5h5v-5z" />
        <Path d="M5 5h14v2H5z" opacity={0.3} />
    </Svg>
);

export default TodayTwoTone;
