import * as React from 'react';
import Svg, { SvgProps, Path, Circle } from 'react-native-svg';

const GroupWorkOutlined = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
        <Circle cx={8} cy={14} r={2} />
        <Circle cx={12} cy={8} r={2} />
        <Circle cx={16} cy={14} r={2} />
    </Svg>
);

export default GroupWorkOutlined;