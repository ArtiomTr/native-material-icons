import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const ImageAspectRatioSharp = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M16 10h-2v2h2v-2zm0 4h-2v2h2v-2zm-8-4H6v2h2v-2zm4 0h-2v2h2v-2zm10-6H2v16h20V4zm-2 14H4V6h16v12z" />
    </Svg>
);

export default ImageAspectRatioSharp;
