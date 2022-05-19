import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const StackedBarChart = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M6 10h3v10H6zm0-5h3v4H6zm10 11h3v4h-3zm0-3h3v2h-3zm-5 0h3v7h-3zm0-4h3v3h-3z" />
    </Svg>
);

export default StackedBarChart;
