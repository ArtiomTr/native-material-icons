import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const AdUnitsOutlined = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M17 1H7c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zM7 4V3h10v1H7zm0 14V6h10v12H7zm0 3v-1h10v1H7z" />
        <Path d="M16 7H8v2h8V7z" />
    </Svg>
);

export default AdUnitsOutlined;