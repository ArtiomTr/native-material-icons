import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const FolderOffSharp = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="m12 6-2-2H6.83L22 19.17V6zM2.1 2.1.69 3.51 2 4.83V20h15.17l3.32 3.31 1.41-1.41z" />
    </Svg>
);

export default FolderOffSharp;
