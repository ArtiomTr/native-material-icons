import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const RemoveCircleOutlined = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11H7v-2h10v2z" />
    </Svg>
);

export default RemoveCircleOutlined;