import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const RepeatTwoTone = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M7 22v-3h12v-6h-2v4H7v-3l-4 4zM21 6l-4-4v3H5v6h2V7h10v3z" />
    </Svg>
);

export default RepeatTwoTone;
