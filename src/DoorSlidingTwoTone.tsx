import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const DoorSlidingTwoTone = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M13 19h5V5h-5v14zm1-8h2v2h-2v-2zm-8 8h5V5H6v14zm2-8h2v2H8v-2z" opacity={0.3} />
        <Path d="M20 19V5c0-1.1-.9-2-2-2H6c-1.1 0-2 .9-2 2v14H3v2h18v-2h-1zm-9 0H6V5h5v14zm7 0h-5V5h5v14z" />
        <Path d="M8 11h2v2H8zm6 0h2v2h-2z" />
    </Svg>
);

export default DoorSlidingTwoTone;