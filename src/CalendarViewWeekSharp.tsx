import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const CalendarViewWeekSharp = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M22 4H2v16h20V4zm-9 2h2.5v12H13V6zm-2 12H8.5V6H11v12zM4 6h2.5v12H4V6zm16 12h-2.5V6H20v12z" />
    </Svg>
);

export default CalendarViewWeekSharp;
