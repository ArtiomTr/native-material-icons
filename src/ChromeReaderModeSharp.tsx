import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const ChromeReaderModeSharp = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M13 12h7v1.5h-7V12zm0-2.5h7V11h-7V9.5zm0 5h7V16h-7v-1.5zM23 4H1v17h22V4zm-2 15h-9V6h9v13z" />
    </Svg>
);

export default ChromeReaderModeSharp;
