import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const LocalHospitalSharp = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M21 3H3.01L3 21h18V3zm-3 11h-4v4h-4v-4H6v-4h4V6h4v4h4v4z" />
    </Svg>
);

export default LocalHospitalSharp;