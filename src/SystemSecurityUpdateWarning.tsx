import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const SystemSecurityUpdateWarning = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M11 15h2v2h-2zm0-8h2v6h-2z" />
        <Path d="M17 1H7c-1.1 0-1.99.9-1.99 2v18c0 1.1.89 2 1.99 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm0 17H7V6h10v12z" />
    </Svg>
);

export default SystemSecurityUpdateWarning;
