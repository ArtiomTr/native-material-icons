import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const VideoStableSharp = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M2 4v16h20V4H2zm2 14V6h2.95l-2.33 8.73L16.82 18H4zm16 0h-2.95l2.34-8.73L7.18 6H20v12z" />
    </Svg>
);

export default VideoStableSharp;
