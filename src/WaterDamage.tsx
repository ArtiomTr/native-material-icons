import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const WaterDamage = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M12 3 2 12h3v8h14v-8h3L12 3zm0 13c-1.1 0-2-.9-2-2s2-4 2-4 2 2.9 2 4-.9 2-2 2z" />
    </Svg>
);

export default WaterDamage;