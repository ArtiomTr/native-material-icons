import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const TapasSharp = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M22 10V1h-8v9c0 1.86 1.28 3.41 3 3.86V21h-2v2h6v-2h-2v-7.14c1.72-.45 3-2 3-3.86zm-2-7v3h-4V3h4zM10 9H8V8h2c1.38 0 2.5-1.12 2.5-2.5S11.38 3 10 3H8V1H6v2H4C2.62 3 1.5 4.12 1.5 5.5S2.62 8 4 8h2v1H4c-1.38 0-2.5 1.12-2.5 2.5S2.62 14 4 14h2v9h2v-9h2c1.38 0 2.5-1.12 2.5-2.5S11.38 9 10 9z" />
    </Svg>
);

export default TapasSharp;
