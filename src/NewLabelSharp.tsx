import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const NewLabelSharp = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="m21 12-4.97 7H12v-6H9v-3H3V5h13.03L21 12zm-11 3H7v-3H5v3H2v2h3v3h2v-3h3v-2z" />
    </Svg>
);

export default NewLabelSharp;
