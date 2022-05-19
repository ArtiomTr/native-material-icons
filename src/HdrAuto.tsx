import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const HdrAuto = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M12.04 8.04h-.09l-1.6 4.55h3.29z" />
        <Path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm3.21 15-.98-2.81H9.78l-1 2.81h-1.9l4.13-11h1.97l4.13 11h-1.9z" />
    </Svg>
);

export default HdrAuto;
