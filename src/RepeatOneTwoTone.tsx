import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const RepeatOneTwoTone = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M13 15V9h-1l-2 1v1h1.5v4zm6-2h-2v4H7v-3l-4 4 4 4v-3h12zM17 2v3H5v6h2V7h10v3l4-4z" />
    </Svg>
);

export default RepeatOneTwoTone;
