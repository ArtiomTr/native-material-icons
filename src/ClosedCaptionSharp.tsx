import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const ClosedCaptionSharp = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M21 4H3v16h18V4zm-10 7H9.5v-.5h-2v3h2V13H11v2H6V9h5v2zm7 0h-1.5v-.5h-2v3h2V13H18v2h-5V9h5v2z" />
    </Svg>
);

export default ClosedCaptionSharp;
