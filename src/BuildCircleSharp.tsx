import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const BuildCircleSharp = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path
            fillRule="evenodd"
            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm3.14 15.25-3.76-3.76c-1.22.43-2.64.17-3.62-.81-1.11-1.11-1.3-2.79-.59-4.1l2.35 2.35 1.41-1.41-2.35-2.35c1.32-.71 2.99-.52 4.1.59.98.98 1.24 2.4.81 3.62l3.76 3.76-2.11 2.11z"
        />
    </Svg>
);

export default BuildCircleSharp;