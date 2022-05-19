import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const PhoneEnabledSharp = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="m3 15.46 5.27-.61 2.52 2.52c2.83-1.44 5.15-3.75 6.59-6.59l-2.53-2.53.61-5.25h5.51C21.55 13.18 13.18 21.55 3 20.97v-5.51z" />
    </Svg>
);

export default PhoneEnabledSharp;