import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const RequestPageSharp = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M14 2H4.01L4 22h16V8l-6-6zm1 9h-4v1h4v5h-2v1h-2v-1H9v-2h4v-1H9V9h2V8h2v1h2v2z" />
    </Svg>
);

export default RequestPageSharp;
