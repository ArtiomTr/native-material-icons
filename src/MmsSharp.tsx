import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const MmsSharp = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M22 2H2v20l4-4h16V2zM5 14l3.5-4.5 2.5 3.01L14.5 8l4.5 6H5z" />
    </Svg>
);

export default MmsSharp;
