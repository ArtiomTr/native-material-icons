import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const FormatSizeOutlined = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M9 4v3h5v12h3V7h5V4H9zm-6 8h3v7h3v-7h3V9H3v3z" />
    </Svg>
);

export default FormatSizeOutlined;
