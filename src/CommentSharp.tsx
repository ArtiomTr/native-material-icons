import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const CommentSharp = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M21.99 2H2v16h16l4 4-.01-20zM18 14H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z" />
    </Svg>
);

export default CommentSharp;
