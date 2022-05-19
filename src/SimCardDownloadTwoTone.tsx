import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const SimCardDownloadTwoTone = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M6 8.83V20h12V4h-7.17L6 8.83zm5 .19L13 9v4h3l-4 4-4-4h3V9.02z" opacity={0.3} />
        <Path d="M18 2h-8L4 8v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 18H6V8.83L10.83 4H18v16z" />
        <Path d="m12 17 4-4h-3V9l-2 .02V13H8z" />
    </Svg>
);

export default SimCardDownloadTwoTone;