import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const CallToActionSharp = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M23 3H1v18h22V3zm-2 16H3v-3h18v3z" />
    </Svg>
);

export default CallToActionSharp;
