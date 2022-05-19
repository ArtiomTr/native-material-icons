import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const RepeatOnTwoTone = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M21 1H3c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm-2 18H7v3l-4-4 4-4v3h10v-4h2v6zm-2-9V7H7v4H5V5h12V2l4 4-4 4z" />
    </Svg>
);

export default RepeatOnTwoTone;
