import * as React from 'react';
import Svg, { SvgProps, Path, Circle } from 'react-native-svg';

const MarkUnreadChatAltTwoTone = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path
            d="M4 17.17 5.17 16H20V7.9c-.32.06-.66.1-1 .1s-.68-.04-1-.1V8H6V6h9.03c-.44-.58-.77-1.26-.92-2H4v13.17zM6 9h12v2H6V9zm0 3h8v2H6v-2z"
            opacity={0.3}
        />
        <Circle cx={19} cy={3} r={3} />
        <Path d="M20 16H5.17L4 17.17V4h10.1c-.18-.89-.08-1.61 0-2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V6.97c-.58.44-1.26.77-2 .92V16z" />
        <Path d="M6 12h8v2H6zm0-3h12v2H6zm0-1h12v-.1c-1.21-.25-2.25-.95-2.97-1.9H6v2z" />
    </Svg>
);

export default MarkUnreadChatAltTwoTone;