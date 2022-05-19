import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const DoorFront = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M19 19V5c0-1.1-.9-2-2-2H7c-1.1 0-2 .9-2 2v14H3v2h18v-2h-2zm-4-6h-2v-2h2v2z" />
    </Svg>
);

export default DoorFront;