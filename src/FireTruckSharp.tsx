import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const FireTruckSharp = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="m23 11-2-6h-2V3h-3v2h-4v6H1v7h3c0 1.66 1.34 3 3 3s3-1.34 3-3h4c0 1.66 1.34 3 3 3s3-1.34 3-3h3v-7zM7 19c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm10 0c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-3-8V7h5.56l1.33 4H14z" />
        <Path d="M11 8.5h-1v-2h1V5H1v1.5h1v2H1V10h10V8.5zm-5.75 0H3.5v-2h1.75v2zm3.25 0H6.75v-2H8.5v2z" />
    </Svg>
);

export default FireTruckSharp;
