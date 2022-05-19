import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const DoorFrontOutlined = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M19 19V5c0-1.1-.9-2-2-2H7c-1.1 0-2 .9-2 2v14H3v2h18v-2h-2zm-2 0H7V5h10v14zm-4-8h2v2h-2v-2z" />
    </Svg>
);

export default DoorFrontOutlined;
