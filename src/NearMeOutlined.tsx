import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const NearMeOutlined = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="m17.27 6.73-4.24 10.13-1.32-3.42-.32-.83-.82-.32-3.43-1.33 10.13-4.23M21 3 3 10.53v.98l6.84 2.65L12.48 21h.98L21 3z" />
    </Svg>
);

export default NearMeOutlined;
