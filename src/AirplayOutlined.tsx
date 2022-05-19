import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const AirplayOutlined = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M6 22h12l-6-6z" />
        <Path d="M21 3H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h4v-2H3V5h18v12h-4v2h4c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z" />
    </Svg>
);

export default AirplayOutlined;
