import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const PaymentTwoTone = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M4 6h16v2H4zm0 6h16v6H4z" opacity={0.3} />
        <Path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z" />
    </Svg>
);

export default PaymentTwoTone;
