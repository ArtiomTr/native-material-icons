import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const TurnRightRound = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M16.29 13.29c.39.39 1.02.39 1.41 0l2.59-2.59c.39-.39.39-1.02 0-1.41L17.7 6.7a.9959.9959 0 0 0-1.41 0c-.39.39-.39 1.02 0 1.41l.88.89H9c-1.1 0-2 .9-2 2v8c0 .55.45 1 1 1s1-.45 1-1v-8h8.17l-.88.88c-.39.39-.39 1.02 0 1.41z" />
    </Svg>
);

export default TurnRightRound;
