import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const RocketSharp = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M12 2.5s4.5 2.04 4.5 10.5c0 2.49-1.04 5.57-1.6 7H9.1c-.56-1.43-1.6-4.51-1.6-7C7.5 4.54 12 2.5 12 2.5zm2 8.5c0-1.1-.9-2-2-2s-2 .9-2 2 .9 2 2 2 2-.9 2-2zm-6.31 9.52c-.48-1.23-1.52-4.17-1.67-6.87L4 15v7l3.69-1.48zM20 22v-7l-2.02-1.35c-.15 2.69-1.2 5.64-1.67 6.87L20 22z" />
    </Svg>
);

export default RocketSharp;
