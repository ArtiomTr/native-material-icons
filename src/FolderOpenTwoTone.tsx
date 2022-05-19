import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const FolderOpenTwoTone = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M4 8h16v10H4z" opacity={0.3} />
        <Path d="M20 6h-8l-2-2H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 12H4V8h16v10z" />
    </Svg>
);

export default FolderOpenTwoTone;
