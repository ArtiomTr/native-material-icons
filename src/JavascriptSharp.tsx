import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const JavascriptSharp = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M12 15v-2h1.5v.5h2v-1H12V9h5v2h-1.5v-.5h-2v1H17V15h-5zM9 9v4.5H7.5v-1H6V15h4.5V9H9z" />
    </Svg>
);

export default JavascriptSharp;
