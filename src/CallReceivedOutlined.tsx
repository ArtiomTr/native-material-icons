import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const CallReceivedOutlined = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M20 5.41 18.59 4 7 15.59V9H5v10h10v-2H8.41L20 5.41z" />
    </Svg>
);

export default CallReceivedOutlined;
