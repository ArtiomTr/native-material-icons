import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const WaterDropSharp = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M12 2c-5.33 4.55-8 8.48-8 11.8 0 4.98 3.8 8.2 8 8.2s8-3.22 8-8.2c0-3.32-2.67-7.25-8-11.8zm1 16.91c-.32.06-.65.09-1 .09-2.69 0-4.88-1.94-5-5h1.5c.08 2.07 1.5 3.5 3.5 3.5.35 0 .69-.04 1-.13v1.54z" />
    </Svg>
);

export default WaterDropSharp;
