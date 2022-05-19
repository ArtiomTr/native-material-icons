import * as React from 'react';
import Svg, { SvgProps, Path, Circle } from 'react-native-svg';

const MarkUnreadChatAltOutlined = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M20 16H4V4h10.1c-.08-.39-.18-1.11 0-2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V6.98c-.58.44-1.26.77-2 .92V16z" />
        <Circle cx={19} cy={3} r={3} />
        <Path d="M6 12h8v2H6zm0-3h12v2H6zm0-1h12v-.1c-1.21-.25-2.25-.95-2.97-1.9H6v2z" />
    </Svg>
);

export default MarkUnreadChatAltOutlined;