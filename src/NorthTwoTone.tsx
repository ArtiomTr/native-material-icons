import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const NorthTwoTone = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="m5 9 1.41 1.41L11 5.83V22h2V5.83l4.59 4.59L19 9l-7-7-7 7z" />
    </Svg>
);

export default NorthTwoTone;