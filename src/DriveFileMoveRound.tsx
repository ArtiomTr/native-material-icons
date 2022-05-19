import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const DriveFileMoveRound = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M20 6h-8l-1.41-1.41C10.21 4.21 9.7 4 9.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-8 9.79V14H9c-.55 0-1-.45-1-1s.45-1 1-1h3v-1.79c0-.45.54-.67.85-.35l2.79 2.79c.2.2.2.51 0 .71l-2.79 2.79c-.31.31-.85.09-.85-.36z" />
    </Svg>
);

export default DriveFileMoveRound;
