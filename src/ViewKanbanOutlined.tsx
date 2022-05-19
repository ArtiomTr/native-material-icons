import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const ViewKanbanOutlined = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M7 7h2v10H7zm4 0h2v5h-2zm4 0h2v8h-2z" />
        <Path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z" />
    </Svg>
);

export default ViewKanbanOutlined;
