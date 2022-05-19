import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const InboxSharp = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M21 3H3.01v18H21V3zm-2 12h-4c0 1.66-1.35 3-3 3s-3-1.34-3-3H5V5h14v10z" />
    </Svg>
);

export default InboxSharp;