import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const RollerShadesTwoTone = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M6 5h12v6H6z" opacity={0.3} />
        <Path d="M20 19V3H4v16H2v2h20v-2h-2zm-2 0H6v-6h5v1.82c-.45.32-.75.84-.75 1.43 0 .97.78 1.75 1.75 1.75s1.75-.78 1.75-1.75c0-.59-.3-1.12-.75-1.43V13h5v6zm0-8H6V5h12v6z" />
    </Svg>
);

export default RollerShadesTwoTone;
