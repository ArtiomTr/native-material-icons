import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const FontDownload = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" baseProfile="tiny" viewBox="0 0 24 24" {...props}>
        <Path d="M9.93 13.5h4.14L12 7.98zM20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-4.05 16.5-1.14-3H9.17l-1.12 3H5.96l5.11-13h1.86l5.11 13h-2.09z" />
    </Svg>
);

export default FontDownload;
