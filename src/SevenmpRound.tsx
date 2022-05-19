import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const SevenmpRound = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M15 14h1.5v1.5H15z" />
        <Path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-6.5 14.75c0 .41-.34.75-.75.75s-.75-.34-.75-.75V14h-1v2.25c0 .41-.34.75-.75.75s-.75-.34-.75-.75V14h-1v3.75c0 .41-.34.75-.75.75S6 18.16 6 17.75V13.5c0-.55.45-1 1-1h4.5c.55 0 1 .45 1 1v4.25zm-.12-6.25c-.56 0-.97-.54-.8-1.08L12.62 7h-1.87c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2.75c.67 0 1.15.65.96 1.29l-1.28 4.12c-.11.35-.43.59-.8.59zM18 16c0 .55-.45 1-1 1h-2v.75c0 .41-.34.75-.75.75s-.75-.34-.75-.75V13.5c0-.55.45-1 1-1H17c.55 0 1 .45 1 1V16z" />
    </Svg>
);

export default SevenmpRound;