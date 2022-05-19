import * as React from 'react';
import Svg, { SvgProps, Path, Circle } from 'react-native-svg';

const VideogameAssetOutlined = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M21 6H3c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 10H3V8h18v8zM6 15h2v-2h2v-2H8V9H6v2H4v2h2z" />
        <Circle cx={14.5} cy={13.5} r={1.5} />
        <Circle cx={18.5} cy={10.5} r={1.5} />
    </Svg>
);

export default VideogameAssetOutlined;
