import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const MedicationSharp = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M6 3h12v2H6zm13 3H5v15h14V6zm-3 9h-2.5v2.5h-3V15H8v-3h2.5V9.5h3V12H16v3z" />
    </Svg>
);

export default MedicationSharp;
