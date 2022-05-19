import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const ElevatorTwoTone = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path
            d="M19 5v14H5V5h14m-9 13v-4h1v-2.5c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2V14h1v4h3zM8.5 8.5c.69 0 1.25-.56 1.25-1.25S9.19 6 8.5 6s-1.25.56-1.25 1.25S7.81 8.5 8.5 8.5zM18 11l-2.5-4-2.5 4h5zm-5 2 2.5 4 2.5-4h-5z"
            opacity={0.3}
        />
        <Path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-9 15v-4h1v-2.5c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2V14h1v4h3zM8.5 8.5c.69 0 1.25-.56 1.25-1.25S9.19 6 8.5 6s-1.25.56-1.25 1.25S7.81 8.5 8.5 8.5zM18 11l-2.5-4-2.5 4h5zm-5 2 2.5 4 2.5-4h-5z" />
    </Svg>
);

export default ElevatorTwoTone;
