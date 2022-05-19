import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const NavigationSharp = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M12 2 4.5 20.29l.71.71L12 18l6.79 3 .71-.71L12 2z" />
    </Svg>
);

export default NavigationSharp;