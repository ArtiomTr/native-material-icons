import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const VolcanoSharp = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M18 8h-7l-2 5H6l-4 9h20zm-5-7h2v4h-2zm3.1212 4.4683L18.9496 2.64l1.4142 1.4142-2.8284 2.8284zm-8.4815-1.418 1.4142-1.4142 2.8284 2.8284-1.4142 1.4142z" />
    </Svg>
);

export default VolcanoSharp;