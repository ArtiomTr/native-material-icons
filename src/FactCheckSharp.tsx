import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const FactCheckSharp = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path
            fillRule="evenodd"
            d="M2 3v18h20V3H2zm8 14H5v-2h5v2zm0-4H5v-2h5v2zm0-4H5V7h5v2zm4.82 6L12 12.16l1.41-1.41 1.41 1.42L17.99 9l1.42 1.42L14.82 15z"
        />
    </Svg>
);

export default FactCheckSharp;