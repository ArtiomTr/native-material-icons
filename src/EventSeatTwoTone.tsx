import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const EventSeatTwoTone = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M9 5h6v7H9z" opacity={0.3} />
        <Path d="M4 21h2v-4h12v4h2v-6H4zM17 5c0-1.1-.9-2-2-2H9c-1.1 0-2 .9-2 2v9h10V5zm-2 7H9V5h6v7zm4-2h3v3h-3zM2 10h3v3H2z" />
    </Svg>
);

export default EventSeatTwoTone;
