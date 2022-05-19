import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const DownloadForOffline = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M12 2C6.49 2 2 6.49 2 12s4.49 10 10 10 10-4.49 10-10S17.51 2 12 2zm-1 8V6h2v4h3l-4 4-4-4h3zm6 7H7v-2h10v2z" />
    </Svg>
);

export default DownloadForOffline;
