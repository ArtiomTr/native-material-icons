import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const OutletSharp = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM8 12V7h2v5H8zm6 6h-4v-1.89c0-1 .68-1.92 1.66-2.08 1.26-.21 2.34.76 2.34 1.97v2zm2-6h-2V7h2v5z" />
    </Svg>
);

export default OutletSharp;