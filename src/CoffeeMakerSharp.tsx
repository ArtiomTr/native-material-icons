import * as React from 'react';
import Svg, { SvgProps, Path, Circle } from 'react-native-svg';

const CoffeeMakerSharp = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M18 7V4h2V2H4v20h16v-2h-4.03c1.23-.91 2.03-2.36 2.03-4v-5H8v5c0 1.64.81 3.09 2.03 4H6V4h2v3h10z" />
        <Circle cx={13} cy={9} r={1} />
    </Svg>
);

export default CoffeeMakerSharp;
