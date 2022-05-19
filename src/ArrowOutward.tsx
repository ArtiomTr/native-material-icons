import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const ArrowOutward = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M6 6v2h8.59L5 17.59 6.41 19 16 9.41V18h2V6z" />
    </Svg>
);

export default ArrowOutward;
