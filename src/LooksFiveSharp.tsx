import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const LooksFiveSharp = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M21 3H3v18h18V3zm-6 6h-4v2h4v6H9v-2h4v-2H9V7h6v2z" />
    </Svg>
);

export default LooksFiveSharp;
