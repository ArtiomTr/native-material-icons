import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const PhotoAlbumSharp = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M20 2H4v20h16V2zm-9 2h5v7l-2.5-1.5L11 11V4zM7 18l2.38-3.17L11 17l2.62-3.5L17 18H7z" />
    </Svg>
);

export default PhotoAlbumSharp;