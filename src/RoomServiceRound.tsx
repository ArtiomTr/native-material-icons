import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const RoomServiceRound = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M3 17h18c.55 0 1 .45 1 1s-.45 1-1 1H3c-.55 0-1-.45-1-1s.45-1 1-1zm10.84-9.21c.1-.24.16-.51.16-.79 0-1.1-.9-2-2-2s-2 .9-2 2c0 .28.06.55.16.79C6.25 8.6 3.27 11.93 3 16h18c-.27-4.07-3.25-7.4-7.16-8.21z" />
    </Svg>
);

export default RoomServiceRound;
