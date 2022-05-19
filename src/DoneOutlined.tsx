import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const DoneOutlined = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" />
    </Svg>
);

export default DoneOutlined;
