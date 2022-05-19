import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const CommitRound = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M21 13c.55 0 1-.45 1-1s-.45-1-1-1h-4.1c-.46-2.28-2.48-4-4.9-4s-4.44 1.72-4.9 4H3c-.55 0-1 .45-1 1s.45 1 1 1h4.1c.46 2.28 2.48 4 4.9 4s4.44-1.72 4.9-4H21zm-9 2c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z" />
    </Svg>
);

export default CommitRound;