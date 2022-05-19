import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const AreaChartOutlined = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="m17 7-5-4-5 7-4-3v13h18V7h-4zm2 9.95-7-5.45L8 17l-3-2.4V11l2.44 1.83 4.96-6.95L16.3 9H19v7.95z" />
    </Svg>
);

export default AreaChartOutlined;
