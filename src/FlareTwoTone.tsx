import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const FlareTwoTone = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M5.644 7.05 7.05 5.645l2.123 2.122-1.408 1.407zM11 1h2v6h-2zm5.242 13.834 2.12 2.12-1.406 1.408-2.12-2.12zM14.834 7.76l2.12-2.123 1.41 1.407-2.123 2.122zm-5.668 8.482-2.122 2.12-1.407-1.406 2.122-2.122zM12 9c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zm-1 8h2v6h-2zM1 11h6v2H1zm16 0h6v2h-6z" />
    </Svg>
);

export default FlareTwoTone;
