import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const ClearAllOutlined = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M5 13h14v-2H5v2zm-2 4h14v-2H3v2zM7 7v2h14V7H7z" />
    </Svg>
);

export default ClearAllOutlined;
