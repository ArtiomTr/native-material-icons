import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const ThumbsUpDownSharp = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M12 5H5.82l.78-3.78L5.38 0 0 5.38V14h9.24L12 7.54zm2.76 5L12 16.46V19h6.18l-.78 3.78L18.62 24 24 18.62V10z" />
    </Svg>
);

export default ThumbsUpDownSharp;