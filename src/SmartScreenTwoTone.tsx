import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const SmartScreenTwoTone = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M3 17h1V7H3v10zM20 7v10h1V7h-1z" opacity={0.3} />
        <Path d="M14 11.25h-1.5v1.5H14v-1.5zm2.5 0H15v1.5h1.5v-1.5zm-5 0H10v1.5h1.5v-1.5zm-2.5 0H7.5v1.5H9v-1.5zM21 5H3c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zM4 17H3V7h1v10zm14 0H6V7h12v10zm3 0h-1V7h1v10z" />
    </Svg>
);

export default SmartScreenTwoTone;
