import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const KeyboardTabSharp = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M11.59 7.41 15.17 11H1v2h14.17l-3.59 3.59L13 18l6-6-6-6-1.41 1.41zM20 6v12h2V6h-2z" />
    </Svg>
);

export default KeyboardTabSharp;