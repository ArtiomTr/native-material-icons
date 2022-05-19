import * as React from 'react';
import Svg, { SvgProps, Circle, Path } from 'react-native-svg';

const PriorityHighRound = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Circle cx={12} cy={19} r={2} />
        <Path d="M12 3c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2s2-.9 2-2V5c0-1.1-.9-2-2-2z" />
    </Svg>
);

export default PriorityHighRound;
