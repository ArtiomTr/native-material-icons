import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const MuseumSharp = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M22 11V9L12 2 2 9v2h2v9H2v2h20v-2h-2v-9h2zm-6 7h-2v-4l-2 3-2-3v4H8v-7h2l2 3 2-3h2v7z" />
    </Svg>
);

export default MuseumSharp;
