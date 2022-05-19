import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const NextWeekTwoTone = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M4 20h16V9H4v11zm6-8.5 1-1 4 4-4 4-1-1 3-3-3-3z" opacity={0.3} />
        <Path d="m11 18.5 4-4-4-4-1 1 3 3-3 3zM20 7h-4V5c0-.55-.22-1.05-.59-1.41C15.05 3.22 14.55 3 14 3h-4c-1.1 0-2 .9-2 2v2H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2zM10 5h4v2h-4V5zm10 15H4V9h16v11z" />
    </Svg>
);

export default NextWeekTwoTone;
