import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const DifferenceSharp = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M18 23H2V7h2v14h14v2zM15 1H6.01L6 19h15V7l-6-6zm1.5 14h-6v-2h6v2zm0-6h-2v2h-2V9h-2V7h2V5h2v2h2v2z" />
    </Svg>
);

export default DifferenceSharp;
