import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const EastOutlined = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="m15 5-1.41 1.41L18.17 11H2v2h16.17l-4.59 4.59L15 19l7-7-7-7z" />
    </Svg>
);

export default EastOutlined;
