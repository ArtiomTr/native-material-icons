import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const LooksFiveTwoTone = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M19 5H5v14h14V5zm-4 4h-4v2h2c1.1 0 2 .89 2 2v2c0 1.11-.9 2-2 2H9v-2h4v-2H9V7h6v2z" opacity={0.3} />
        <Path d="M5 21h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2zM5 5h14v14H5V5zm4 8h4v2H9v2h4c1.1 0 2-.89 2-2v-2c0-1.11-.9-2-2-2h-2V9h4V7H9v6z" />
    </Svg>
);

export default LooksFiveTwoTone;
