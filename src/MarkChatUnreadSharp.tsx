import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const MarkChatUnreadSharp = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M22 6.98V18H6l-4 4V2h12.1c-.06.32-.1.66-.1 1 0 2.76 2.24 5 5 5 1.13 0 2.16-.39 3-1.02zM16 3c0 1.66 1.34 3 3 3s3-1.34 3-3-1.34-3-3-3-3 1.34-3 3z" />
    </Svg>
);

export default MarkChatUnreadSharp;
