import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const ToggleOffTwoTone = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path
            d="M17 8H7c-2.21 0-4 1.79-4 4s1.79 4 4 4h10c2.21 0 4-1.79 4-4s-1.79-4-4-4zM7 15c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"
            opacity={0.3}
        />
        <Path d="M17 6H7c-3.31 0-6 2.69-6 6s2.69 6 6 6h10c3.31 0 6-2.69 6-6s-2.69-6-6-6zm0 10H7c-2.21 0-4-1.79-4-4s1.79-4 4-4h10c2.21 0 4 1.79 4 4s-1.79 4-4 4zM7 9c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
    </Svg>
);

export default ToggleOffTwoTone;