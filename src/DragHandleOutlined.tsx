import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const DragHandleOutlined = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M20 9H4v2h16V9zM4 15h16v-2H4v2z" />
    </Svg>
);

export default DragHandleOutlined;
