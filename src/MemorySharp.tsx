import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const MemorySharp = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M15 9H9v6h6V9zm-2 4h-2v-2h2v2zm8-2V9h-2V5h-4V3h-2v2h-2V3H9v2H5v4H3v2h2v2H3v2h2v4h4v2h2v-2h2v2h2v-2h4v-4h2v-2h-2v-2h2zm-4 6H7V7h10v10z" />
    </Svg>
);

export default MemorySharp;
