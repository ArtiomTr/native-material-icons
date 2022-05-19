import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const SpaceDashboardSharp = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M11 21H3V3h8v18zm2 0h8v-9h-8v9zm8-11V3h-8v7h8z" />
    </Svg>
);

export default SpaceDashboardSharp;
