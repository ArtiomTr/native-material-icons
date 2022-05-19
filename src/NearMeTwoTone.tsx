import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const NearMeTwoTone = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="m11.39 12.61.32.83 1.32 3.42 4.24-10.13-10.13 4.24 3.42 1.33z" opacity={0.3} />
        <Path d="m3 11.51 6.84 2.65L12.48 21h.98L21 3 3 10.53v.98zm14.27-4.78-4.24 10.13-1.32-3.42-.32-.83-.82-.32-3.43-1.33 10.13-4.23z" />
    </Svg>
);

export default NearMeTwoTone;
