import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const CasesSharp = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M18 5V1h-8v4H5v13h18V5h-5zm-2 0h-4V3h4v2zM3 9H1v13h18v-2H3V9z" />
    </Svg>
);

export default CasesSharp;
