import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const AlignHorizontalCenterSharp = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M11 2h2v5h8v3h-8v4h5v3h-5v5h-2v-5H6v-3h5v-4H3V7h8z" />
    </Svg>
);

export default AlignHorizontalCenterSharp;
