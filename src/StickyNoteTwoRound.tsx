import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const StickyNoteTwoRound = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M19 3H4.99C3.89 3 3 3.9 3 5l.01 14c0 1.1.89 2 1.99 2h10l6-6V5c0-1.1-.9-2-2-2zM8 8h8c.55 0 1 .45 1 1s-.45 1-1 1H8c-.55 0-1-.45-1-1s.45-1 1-1zm3 6H8c-.55 0-1-.45-1-1s.45-1 1-1h3c.55 0 1 .45 1 1s-.45 1-1 1zm3 5.5V15c0-.55.45-1 1-1h4.5L14 19.5z" />
    </Svg>
);

export default StickyNoteTwoRound;
