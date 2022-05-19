import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const PictureInPictureAltTwoTone = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M19 11h-8v6h8v-6zm-2 4h-4v-2h4v2zm4-12H3c-1.1 0-2 .88-2 1.98V19c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V4.98C23 3.88 22.1 3 21 3zm0 16.02H3V4.97h18v14.05z" />
        <Path d="M13 13h4v2h-4z" opacity={0.3} />
    </Svg>
);

export default PictureInPictureAltTwoTone;
