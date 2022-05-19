import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const FilterSevenSharp = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M3 5H1v18h18v-2H3V5zm20-4H5v18h18V1zm-2 16H7V3h14v14zm-8-2 4-8V5h-6v2h4l-4 8h2z" />
    </Svg>
);

export default FilterSevenSharp;
