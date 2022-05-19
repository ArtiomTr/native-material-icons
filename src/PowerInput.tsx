import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const PowerInput = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M2 9v2h19V9H2zm0 6h5v-2H2v2zm7 0h5v-2H9v2zm7 0h5v-2h-5v2z" />
    </Svg>
);

export default PowerInput;