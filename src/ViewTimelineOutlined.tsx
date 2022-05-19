import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const ViewTimelineOutlined = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M6 15h6v2H6zm6-8h6v2h-6zm-3 4h6v2H9z" />
        <Path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z" />
    </Svg>
);

export default ViewTimelineOutlined;
