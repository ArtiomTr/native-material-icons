import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const AddBoxSharp = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M21 3H3v18h18V3zm-4 10h-4v4h-2v-4H7v-2h4V7h2v4h4v2z" />
    </Svg>
);

export default AddBoxSharp;