import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const ArrowLeftRound = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M12.29 8.71 9.7 11.3c-.39.39-.39 1.02 0 1.41l2.59 2.59c.63.63 1.71.18 1.71-.71V9.41c0-.89-1.08-1.33-1.71-.7z" />
    </Svg>
);

export default ArrowLeftRound;