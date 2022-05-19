import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const BackupTableOutlined = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M20 6v14H6v2h14c1.1 0 2-.9 2-2V6h-2z" />
        <Path d="M16 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM9 16H4v-5h5v5zm7 0h-5v-5h5v5zm0-7H4V4h12v5z" />
    </Svg>
);

export default BackupTableOutlined;