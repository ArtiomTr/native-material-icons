import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const MobileFriendlySharp = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M21 1H7v5h2V4h10v16H9v-2H7v5h14V1zM7.01 13.47l-2.55-2.55-1.27 1.27L7 16l7.19-7.19-1.27-1.27-5.91 5.93z" />
    </Svg>
);

export default MobileFriendlySharp;