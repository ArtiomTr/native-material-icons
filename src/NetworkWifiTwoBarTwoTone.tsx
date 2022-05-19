import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const NetworkWifiTwoBarTwoTone = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path
            d="M16.78 13.38C15.4 12.5 13.76 12 12 12c-1.76 0-3.4.5-4.78 1.38l-4.3-4.3C5.51 7.08 8.67 6 12 6s6.49 1.08 9.08 3.07l-4.3 4.31z"
            opacity={0.3}
        />
        <Path d="M12 4C7.31 4 3.07 5.9 0 8.98L12 21 24 8.98C20.93 5.9 16.69 4 12 4zm4.78 9.38C15.4 12.5 13.76 12 12 12c-1.76 0-3.4.5-4.78 1.38l-4.3-4.3C5.51 7.08 8.67 6 12 6s6.49 1.08 9.08 3.07l-4.3 4.31z" />
    </Svg>
);

export default NetworkWifiTwoBarTwoTone;
