import * as React from 'react';
import Svg, { SvgProps, Path, Circle } from 'react-native-svg';

const WomanTwoTone = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M13.94 8.31C13.62 7.52 12.85 7 12 7s-1.62.52-1.94 1.31L7 16h3v6h4v-6h3l-3.06-7.69z" />
        <Circle cx={12} cy={4} r={2} />
    </Svg>
);

export default WomanTwoTone;