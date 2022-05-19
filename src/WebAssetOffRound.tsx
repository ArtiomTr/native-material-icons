import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const WebAssetOffRound = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M6.83 4H20c1.11 0 2 .9 2 2v12c0 .34-.09.66-.23.94L20 17.17V8h-9.17l-4-4zm12.95 18.61L17.17 20H4c-1.11 0-2-.9-2-2V6c0-.34.08-.66.23-.94l-.84-.84a.9959.9959 0 0 1 0-1.41c.39-.39 1.02-.39 1.41 0l18.38 18.38c.39.39.39 1.02 0 1.41-.38.4-1.01.4-1.4.01zM15.17 18l-10-10H4v10h11.17z" />
    </Svg>
);

export default WebAssetOffRound;
