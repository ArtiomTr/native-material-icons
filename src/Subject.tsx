import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const Subject = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M14 17H4v2h10v-2zm6-8H4v2h16V9zM4 15h16v-2H4v2zM4 5v2h16V5H4z" />
    </Svg>
);

export default Subject;
