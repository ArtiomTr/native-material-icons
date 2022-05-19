import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const WysiwygSharp = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M17 12H7v-2h10v2zm-4 2H7v2h6v-2zm8 7H3V3h18v18zM19 7H5v12h14V7z" />
    </Svg>
);

export default WysiwygSharp;
