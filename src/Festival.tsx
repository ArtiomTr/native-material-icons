import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const Festival = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M13 5.7V4h3l-1-1.49L16 1h-5v4.7L2 12v10h7v-5l3.03-2L15 17v5h7V12z" />
    </Svg>
);

export default Festival;
