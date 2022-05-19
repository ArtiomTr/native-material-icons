import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const West = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="m9 19 1.41-1.41L5.83 13H22v-2H5.83l4.59-4.59L9 5l-7 7 7 7z" />
    </Svg>
);

export default West;
