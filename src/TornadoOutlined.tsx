import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const TornadoOutlined = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M23 3H1l11 19L23 3zm-3.47 2-1.74 3H6.21L4.47 5h15.06zm-9.27 10h3.48L12 18.01 10.26 15zm4.64-2H9.1l-1.74-3h9.27l-1.73 3z" />
    </Svg>
);

export default TornadoOutlined;
