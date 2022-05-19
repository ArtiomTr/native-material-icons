import * as React from 'react';
import Svg, { SvgProps, Circle, Path } from 'react-native-svg';

const ShowerSharp = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Circle cx={8} cy={17} r={1} />
        <Circle cx={12} cy={17} r={1} />
        <Circle cx={16} cy={17} r={1} />
        <Path d="M13 5.08V3h-2v2.08C7.61 5.57 5 8.47 5 12v2h14v-2c0-3.53-2.61-6.43-6-6.92z" />
        <Circle cx={8} cy={20} r={1} />
        <Circle cx={12} cy={20} r={1} />
        <Circle cx={16} cy={20} r={1} />
    </Svg>
);

export default ShowerSharp;