import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const SmsFailedSharp = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M22 2H2v20l4-4h16V2zm-9 12h-2v-2h2v2zm0-4h-2V6h2v4z" />
    </Svg>
);

export default SmsFailedSharp;