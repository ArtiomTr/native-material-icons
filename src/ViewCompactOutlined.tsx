import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const ViewCompactOutlined = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M3 5v14h19V5H3zm2 2h15v4H5V7zm0 10v-4h4v4H5zm6 0v-4h9v4h-9z" />
    </Svg>
);

export default ViewCompactOutlined;