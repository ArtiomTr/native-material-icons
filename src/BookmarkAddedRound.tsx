import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const BookmarkAddedRound = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M5 5c0-1.1.9-2 2-2h7c-.63.84-1 1.87-1 3 0 2.76 2.24 5 5 5 .34 0 .68-.03 1-.1v8.58c0 .72-.73 1.2-1.39.92L12 18l-5.61 2.4c-.66.29-1.39-.2-1.39-.92V5zm17.07-1.66c.39.39.39 1.02 0 1.41l-3.54 3.54c-.39.39-1.02.39-1.41 0l-1.41-1.41a.9959.9959 0 0 1 0-1.41c.39-.39 1.02-.39 1.41 0l.71.71 2.83-2.83c.39-.4 1.02-.4 1.41-.01z" />
    </Svg>
);

export default BookmarkAddedRound;
