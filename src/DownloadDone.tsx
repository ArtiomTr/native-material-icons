import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const DownloadDone = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M20.13 5.41 18.72 4l-9.19 9.19-4.25-4.24-1.41 1.41 5.66 5.66zM5 18h14v2H5z" />
    </Svg>
);

export default DownloadDone;
