import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const WindowSharp = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M22 2H2v20h20V2zm-2 9h-7V4h7v7zm-9-7v7H4V4h7zm-7 9h7v7H4v-7zm9 7v-7h7v7h-7z" />
    </Svg>
);

export default WindowSharp;