import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const HomeSharp = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8h5z" />
    </Svg>
);

export default HomeSharp;