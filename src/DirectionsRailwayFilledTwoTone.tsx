import * as React from 'react';
import Svg, { SvgProps, Path, Circle } from 'react-native-svg';

const DirectionsRailwayFilledTwoTone = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path
            d="M6 15.5c0 .83.67 1.5 1.5 1.5h9c.83 0 1.5-.67 1.5-1.5V12H6v3.5zm6-2.5c.83 0 1.5.67 1.5 1.5S12.83 16 12 16s-1.5-.67-1.5-1.5.67-1.5 1.5-1.5zm0-9c-3.52 0-4.97.48-5.57 1h11.24c-.54-.54-1.96-1-5.67-1z"
            opacity={0.3}
        />
        <Path d="M12 2c-4 0-8 .5-8 4v9.5C4 17.43 5.57 19 7.5 19L6 20v1h12v-1l-1.5-1c1.93 0 3.5-1.57 3.5-3.5V6c0-3.5-3.58-4-8-4zm0 2c3.71 0 5.13.46 5.67 1H6.43c.6-.52 2.05-1 5.57-1zm6 11.5c0 .83-.67 1.5-1.5 1.5h-9c-.83 0-1.5-.67-1.5-1.5V12h12v3.5zm0-5.5H6V7h12v3z" />
        <Circle cx={12} cy={14.5} r={1.5} />
    </Svg>
);

export default DirectionsRailwayFilledTwoTone;