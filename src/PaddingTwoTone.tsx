import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const PaddingTwoTone = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M5 19h14V5H5v14zM15 7h2v2h-2V7zm-4 0h2v2h-2V7zM7 7h2v2H7V7z" opacity={0.3} />
        <Path d="M3 5v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2zm16 14H5V5h14v14z" />
        <Path d="M15 7h2v2h-2zM7 7h2v2H7zm4 0h2v2h-2z" />
    </Svg>
);

export default PaddingTwoTone;
