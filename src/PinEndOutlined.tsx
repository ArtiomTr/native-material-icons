import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const PinEndOutlined = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M20 12V6H4v12h10v2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2h16c1.1 0 2 .9 2 2v6h-2zm-1 2c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zm-4.34-6H9v5.66h2v-2.24l2.95 2.95 1.41-1.41L12.41 10h2.24V8z" />
    </Svg>
);

export default PinEndOutlined;
