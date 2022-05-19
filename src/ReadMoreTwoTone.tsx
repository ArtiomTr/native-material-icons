import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const ReadMoreTwoTone = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M13 7h9v2h-9zm0 8h9v2h-9zm3-4h6v2h-6zm-3 1L8 7v4H2v2h6v4z" />
    </Svg>
);

export default ReadMoreTwoTone;
