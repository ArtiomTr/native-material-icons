import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const ExpandMore = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z" />
    </Svg>
);

export default ExpandMore;
