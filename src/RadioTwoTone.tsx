import * as React from 'react';
import Svg, { SvgProps, Path, Circle } from 'react-native-svg';

const RadioTwoTone = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path
            d="M20 13H4v7h16v-7zM8 18.98c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"
            opacity={0.3}
        />
        <Path d="M2 20c0 1.1.89 2 2 2h16c1.11 0 2-.9 2-2V8c0-1.11-.89-2-2-2H8.3l8.26-3.34L15.88 1 3.24 6.15C2.51 6.43 2 7.17 2 8v12zM4 8h16v3h-2V9h-2v2H4V8zm0 5h16v7H4v-7z" />
        <Circle cx={8} cy={16.48} r={2.5} />
    </Svg>
);

export default RadioTwoTone;
