import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const FilterSevenOutlined = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M3 5H1v16c0 1.1.9 2 2 2h16v-2H3V5zm18-4H7c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm0 16H7V3h14v14zm-8-2 4-8V5h-6v2h4l-4 8h2z" />
    </Svg>
);

export default FilterSevenOutlined;
