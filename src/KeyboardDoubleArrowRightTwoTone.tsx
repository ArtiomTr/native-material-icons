import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const KeyboardDoubleArrowRightTwoTone = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M6.41 6 5 7.41 9.58 12 5 16.59 6.41 18l6-6z" />
        <Path d="m13 6-1.41 1.41L16.17 12l-4.58 4.59L13 18l6-6z" />
    </Svg>
);

export default KeyboardDoubleArrowRightTwoTone;