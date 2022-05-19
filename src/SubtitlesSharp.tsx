import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const SubtitlesSharp = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M22 4H2v16h20V4zM4 12h4v2H4v-2zm10 6H4v-2h10v2zm6 0h-4v-2h4v2zm0-4H10v-2h10v2z" />
    </Svg>
);

export default SubtitlesSharp;