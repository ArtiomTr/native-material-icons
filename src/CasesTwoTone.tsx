import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const CasesTwoTone = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M7 7h14v9H7z" opacity={0.3} />
        <Path d="M3 9H1v11c0 1.11.89 2 2 2h17v-2H3V9z" />
        <Path d="M18 5V3c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2v2H5v11c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5h-5zm-6-2h4v2h-4V3zm9 13H7V7h14v9z" />
    </Svg>
);

export default CasesTwoTone;