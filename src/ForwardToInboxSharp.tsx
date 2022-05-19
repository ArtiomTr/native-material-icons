import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const ForwardToInboxSharp = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M22 4H2v16h11v-2H4V8l8 5 8-5v5h2V4zm-10 7L4 6h16l-8 5zm7 4 4 4-4 4v-3h-4v-2h4v-3z" />
    </Svg>
);

export default ForwardToInboxSharp;