import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const IosShareTwoTone = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M18 8h-3v2h3v11H6V10h3V8H6c-1.11 0-2 .89-2 2v11c0 1.1.89 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.11-.9-2-2-2z" />
        <Path d="M11 16h2V5h3l-4-4-4 4h3z" />
    </Svg>
);

export default IosShareTwoTone;