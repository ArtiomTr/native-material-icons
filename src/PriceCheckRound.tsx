import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const PriceCheckRound = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M11 13V9c0-.55-.45-1-1-1H6V6h4c.55 0 1-.45 1-1s-.45-1-1-1H8.5c0-.55-.45-1-1-1s-1 .45-1 1H5c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h4v2H5c-.55 0-1 .45-1 1s.45 1 1 1h1.5c0 .55.45 1 1 1s1-.45 1-1H10c.55 0 1-.45 1-1zm7.88.22-4.95 4.95-2.12-2.12a.9959.9959 0 0 0-1.41 0c-.39.39-.39 1.02 0 1.41l2.83 2.83c.39.39 1.02.39 1.41 0l5.66-5.66c.39-.39.39-1.02 0-1.41-.4-.39-1.03-.39-1.42 0z" />
    </Svg>
);

export default PriceCheckRound;
