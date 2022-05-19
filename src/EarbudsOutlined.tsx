import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const EarbudsOutlined = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M16 3c-2.76 0-5 2.24-5 5v8c0 1.66-1.34 3-3 3s-3-1.34-3-3V9h.83C7.44 9 8.89 7.82 9 6.21 9.12 4.52 7.84 3.11 6.2 3 4.44 2.89 3 4.42 3 6.19V16c0 2.76 2.24 5 5 5s5-2.24 5-5V8c0-1.66 1.34-3 3-3s3 1.34 3 3v7h-.83c-1.61 0-3.06 1.18-3.17 2.79-.12 1.69 1.16 3.1 2.8 3.21 1.76.12 3.2-1.42 3.2-3.18V8c0-2.76-2.24-5-5-5zM5 6c0-.55.45-1 1-1s1 .45 1 1-.45 1-1 1H5V6zm14 12c0 .55-.45 1-1 1s-1-.45-1-1 .45-1 1-1h1v1z" />
    </Svg>
);

export default EarbudsOutlined;
