import * as React from 'react';
import Svg, { SvgProps, Path, Circle } from 'react-native-svg';

const RememberMeSharp = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M19 1H5v22h14V1zm-2 14.21c-1.5-.77-3.2-1.21-5-1.21s-3.5.44-5 1.21V6h10v9.21z" />
        <Circle cx={12} cy={10} r={3} />
    </Svg>
);

export default RememberMeSharp;