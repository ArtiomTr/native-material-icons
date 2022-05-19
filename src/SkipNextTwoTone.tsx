import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const SkipNextTwoTone = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M8 9.86v4.28L11.03 12z" opacity={0.3} />
        <Path d="M14.5 12 6 6v12l8.5-6zM8 9.86 11.03 12 8 14.14V9.86zM16 6h2v12h-2z" />
    </Svg>
);

export default SkipNextTwoTone;
