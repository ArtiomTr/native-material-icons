import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const BedroomChild = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M9 8.5h6v2H9zm6.64 3.5H8.37c-.48 0-.87.39-.87.87h.01V14h9v-1.13c0-.48-.39-.87-.87-.87z" />
        <Path d="M20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 15h-1.5v-1.5h-9V17H6v-4.13c0-1 .62-1.85 1.5-2.2V9c0-1.1.9-2 2-2h5c1.1 0 2 .9 2 2v1.67c.88.35 1.5 1.2 1.5 2.2V17z" />
    </Svg>
);

export default BedroomChild;