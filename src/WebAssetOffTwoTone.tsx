import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const WebAssetOffTwoTone = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M20 17.17V8h-9.17L20 17.17zM5.17 8H4v10h11.17l-10-10z" opacity={0.3} />
        <Path d="M6.83 4H20c1.11 0 2 .9 2 2v12c0 .34-.09.66-.23.94L20 17.17V8h-9.17l-4-4zm13.66 19.31L17.17 20H4c-1.11 0-2-.9-2-2V6c0-.34.08-.66.23-.94L.69 3.51 2.1 2.1l19.8 19.8-1.41 1.41zM15.17 18l-10-10H4v10h11.17z" />
    </Svg>
);

export default WebAssetOffTwoTone;
