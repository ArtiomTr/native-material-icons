import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const HorizontalSplitOutlined = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M19 15v2H5v-2h14m2-10H3v2h18V5zm0 4H3v2h18V9zm0 4H3v6h18v-6z" />
    </Svg>
);

export default HorizontalSplitOutlined;