import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const FileDownloadDoneRound = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M19.42 4.71a.9959.9959 0 0 0-1.41 0L9.53 13.2 5.99 9.66a.9959.9959 0 0 0-1.41 0c-.39.39-.39 1.02 0 1.41l4.24 4.24c.39.39 1.02.39 1.41 0l9.19-9.19c.4-.39.4-1.02 0-1.41zM6 20h12c.55 0 1-.45 1-1s-.45-1-1-1H6c-.55 0-1 .45-1 1s.45 1 1 1z" />
    </Svg>
);

export default FileDownloadDoneRound;