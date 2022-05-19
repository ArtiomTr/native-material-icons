import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const VolumeMuteOutlined = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M14 8.83v6.34L11.83 13H9v-2h2.83L14 8.83M16 4l-5 5H7v6h4l5 5V4z" />
    </Svg>
);

export default VolumeMuteOutlined;
