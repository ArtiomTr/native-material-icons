import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const DeskTwoTone = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M16 8h4v2h-4zm0 4h4v2h-4z" opacity={0.3} />
        <Path d="M2 6v12h2V8h10v10h2v-2h4v2h2V6H2zm18 8h-4v-2h4v2zm0-4h-4V8h4v2z" />
    </Svg>
);

export default DeskTwoTone;
