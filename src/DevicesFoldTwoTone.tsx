import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const DevicesFoldTwoTone = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="m15 3-3 1.29v13.68l3-1.29z" opacity={0.3} />
        <Path d="M20 3h-3c0-1.44-1.47-2.4-2.79-1.84l-3 1.29C10.48 2.76 10 3.49 10 4.29V19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-8 1.29L15 3v13.68l-3 1.29V4.29zM20 19h-5.33l1.12-.48c.73-.32 1.21-1.04 1.21-1.84V5h3v14zM2 3h2v2H2zm0 16h2v2H2zm0-4h2v2H2zm0-4h2v2H2zm0-4h2v2H2zm4-4h2v2H6zm0 16h2v2H6z" />
    </Svg>
);

export default DevicesFoldTwoTone;