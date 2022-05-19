import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const CompressTwoTone = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M4 9h16v2H4zm12-5h-3V1h-2v3H8l4 4zM8 19h3v3h2v-3h3l-4-4zm-4-7h16v2H4z" />
    </Svg>
);

export default CompressTwoTone;