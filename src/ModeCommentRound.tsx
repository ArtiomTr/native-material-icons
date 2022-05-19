import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const ModeCommentRound = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M22 4c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4V4z" />
    </Svg>
);

export default ModeCommentRound;
