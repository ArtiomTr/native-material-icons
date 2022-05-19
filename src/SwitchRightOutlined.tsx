import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const SwitchRightOutlined = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M15.5 15.38V8.62L18.88 12l-3.38 3.38M14 19l7-7-7-7v14zm-4 0V5l-7 7 7 7z" />
    </Svg>
);

export default SwitchRightOutlined;
