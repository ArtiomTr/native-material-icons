import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const VerticalAlignCenterTwoTone = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M11 1v4H8l4 4 4-4h-3V1zM4 11h16v2H4zm4 8h3v4h2v-4h3l-4-4z" />
    </Svg>
);

export default VerticalAlignCenterTwoTone;
