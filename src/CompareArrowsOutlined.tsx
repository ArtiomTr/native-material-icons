import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const CompareArrowsOutlined = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M9.01 14H2v2h7.01v3L13 15l-3.99-4v3zm5.98-1v-3H22V8h-7.01V5L11 9l3.99 4z" />
    </Svg>
);

export default CompareArrowsOutlined;