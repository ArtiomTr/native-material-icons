import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const OutboxSharp = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M11 14h2v-3h3l-4-4-4 4h3z" />
        <Path d="M3 3v18h18V3H3zm16 11h-4.18c-.41 1.16-1.51 2-2.82 2s-2.4-.84-2.82-2H5V5h14v9z" />
    </Svg>
);

export default OutboxSharp;