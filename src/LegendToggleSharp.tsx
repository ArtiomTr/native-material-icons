import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const LegendToggleSharp = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M20 15H4v-2h16v2zm0 2H4v2h16v-2zm-5-6 5-3.55V5l-5 3.55L10 5 4 8.66V11l5.92-3.61L15 11z" />
    </Svg>
);

export default LegendToggleSharp;