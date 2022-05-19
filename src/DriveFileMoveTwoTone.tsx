import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const DriveFileMoveTwoTone = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M20 6h-8l-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 12H4V6h5.17l1.41 1.41.59.59H20v10z" />
        <Path d="M8 14h4v3l4-4-4-4v3H8z" />
        <Path d="M10.59 7.41 9.17 6H4v12h16V8h-8.83l-.58-.59zM12 9l4 4-4 4v-3H8v-2h4V9z" opacity={0.3} />
    </Svg>
);

export default DriveFileMoveTwoTone;
