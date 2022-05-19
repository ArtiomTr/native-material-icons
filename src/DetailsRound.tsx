import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const DetailsRound = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="m11.13 4.57-8.3 14.94c-.37.67.11 1.49.87 1.49h16.6c.76 0 1.24-.82.87-1.49l-8.3-14.94c-.38-.68-1.36-.68-1.74 0zM13 8.92 18.6 19H13V8.92zm-2 0V19H5.4L11 8.92z" />
    </Svg>
);

export default DetailsRound;
