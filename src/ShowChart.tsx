import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const ShowChart = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="m3.5 18.49 6-6.01 4 4L22 6.92l-1.41-1.41-7.09 7.97-4-4L2 16.99z" />
    </Svg>
);

export default ShowChart;