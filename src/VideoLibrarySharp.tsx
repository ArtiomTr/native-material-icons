import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const VideoLibrarySharp = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M4 6H2v16h16v-2H4V6zm18-4H6v16h16V2zM12 14.5v-9l6 4.5-6 4.5z" />
    </Svg>
);

export default VideoLibrarySharp;