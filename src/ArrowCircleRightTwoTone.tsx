import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const ArrowCircleRightTwoTone = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M4 12c0-4.41 3.59-8 8-8s8 3.59 8 8-3.59 8-8 8-8-3.59-8-8m8-1H8v2h4v3l4-4-4-4v3z" opacity={0.3} />
        <Path d="M4 12c0-4.41 3.59-8 8-8s8 3.59 8 8-3.59 8-8 8-8-3.59-8-8m-2 0c0 5.52 4.48 10 10 10s10-4.48 10-10S17.52 2 12 2 2 6.48 2 12zm10-1H8v2h4v3l4-4-4-4v3z" />
    </Svg>
);

export default ArrowCircleRightTwoTone;