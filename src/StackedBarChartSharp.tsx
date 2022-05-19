import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const StackedBarChartSharp = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M6 10h3v10H6V10zm0-5h3v4H6V5zm10 11h3v4h-3v-4zm0-3h3v2h-3v-2zm-5 0h3v7h-3v-7zm0-4h3v3h-3V9z" />
    </Svg>
);

export default StackedBarChartSharp;
