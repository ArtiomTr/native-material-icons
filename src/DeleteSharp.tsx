import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const DeleteSharp = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M6 21h12V7H6v14zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z" />
    </Svg>
);

export default DeleteSharp;
