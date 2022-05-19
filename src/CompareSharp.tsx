import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const CompareSharp = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M10 3H3v18h7v2h2V1h-2v2zm0 15H5l5-6v6zM21 3h-7v2h5v13l-5-6v9h7V3z" />
    </Svg>
);

export default CompareSharp;
