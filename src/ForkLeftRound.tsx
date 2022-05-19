import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const ForkLeftRound = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M15 20c0 .55-.45 1-1 1s-1-.45-1-1v-3c-.73-2.58-3.07-3.47-5.17-3l.88.88c.39.39.39 1.02 0 1.41-.39.39-1.02.39-1.41 0L4.71 13.7a.9959.9959 0 0 1 0-1.41L7.3 9.7c.39-.39 1.02-.39 1.41 0 .39.39.39 1.02 0 1.41l-.88.89c1.51-.33 3.73.08 5.17 1.36V6.83l-.88.88c-.39.39-1.02.39-1.41 0a.9959.9959 0 0 1 0-1.41l2.59-2.59c.39-.39 1.02-.39 1.41 0L17.3 6.3c.39.39.39 1.02 0 1.41-.39.39-1.02.39-1.41 0L15 6.83V20z" />
    </Svg>
);

export default ForkLeftRound;
