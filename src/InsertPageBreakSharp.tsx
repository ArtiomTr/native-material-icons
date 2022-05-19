import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const InsertPageBreakSharp = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M4 17h16v5H4zm16-9-6-6H4.01L4 11h16V8zm-7 1V3.5L18.5 9H13zm-4 4h6v2H9zm8 0h6v2h-6zM1 13h6v2H1z" />
    </Svg>
);

export default InsertPageBreakSharp;