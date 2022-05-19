import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const BookmarkAddRound = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M21 6c0 .55-.45 1-1 1h-1v1c0 .55-.45 1-1 1s-1-.45-1-1V7h-1c-.55 0-1-.45-1-1s.45-1 1-1h1V4c0-.55.45-1 1-1s1 .45 1 1v1h1c.55 0 1 .45 1 1zm-2 13.48c0 .72-.73 1.2-1.39.92L12 18l-5.61 2.4c-.66.29-1.39-.2-1.39-.92V5c0-1.1.9-2 2-2h7c-.63.84-1 1.87-1 3 0 2.76 2.24 5 5 5 .34 0 .68-.03 1-.1v8.58z" />
    </Svg>
);

export default BookmarkAddRound;
