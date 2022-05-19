import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const FormatLineSpacingTwoTone = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M10 5h12v2H10zm0 12h12v2H10zm-8.5 0L5 20.5 8.5 17H6V7h2.5L5 3.5 1.5 7H4v10zm8.5-6h12v2H10z" />
    </Svg>
);

export default FormatLineSpacingTwoTone;