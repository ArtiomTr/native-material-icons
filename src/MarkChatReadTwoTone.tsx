import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const MarkChatReadTwoTone = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M19 10c.34 0 .67.03 1 .08V4H4v12h8.08c.49-3.39 3.39-6 6.92-6z" opacity={0.3} />
        <Path d="m17.34 20-3.54-3.54 1.41-1.41 2.12 2.12 4.24-4.24L23 14.34 17.34 20zm-5.26-4H4V4h16v6.08c.71.1 1.38.31 2 .6V4c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v18l4-4h6c0-.14.02-.27.03-.4-.02-.2-.03-.4-.03-.6 0-.34.03-.67.08-1z" />
    </Svg>
);

export default MarkChatReadTwoTone;
