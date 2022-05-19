import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const PausePresentationSharp = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M1 3v18h22V3H1zm20 16H3V5h18v14zM9 8h2v8H9zm4 0h2v8h-2z" />
    </Svg>
);

export default PausePresentationSharp;