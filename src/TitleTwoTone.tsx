import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const TitleTwoTone = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M5 7h5.5v12h3V7H19V4H5z" />
    </Svg>
);

export default TitleTwoTone;
