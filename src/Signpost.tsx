import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const Signpost = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M13 10h5l3-3-3-3h-5V2h-2v2H4v6h7v2H6l-3 3 3 3h5v4h2v-4h7v-6h-7z" />
    </Svg>
);

export default Signpost;