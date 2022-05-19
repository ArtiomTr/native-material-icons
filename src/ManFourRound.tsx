import * as React from 'react';
import Svg, { SvgProps, Path, Circle } from 'react-native-svg';

const ManFourRound = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M13.75 7h-3.5C9.04 7 8.11 8.07 8.27 9.26L9.82 20.7c.1.74.74 1.3 1.49 1.3h1.38c.75 0 1.39-.55 1.49-1.3l1.56-11.44C15.89 8.07 14.96 7 13.75 7z" />
        <Circle cx={12} cy={4} r={2} />
    </Svg>
);

export default ManFourRound;