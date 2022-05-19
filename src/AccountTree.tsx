import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const AccountTree = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M22 11V3h-7v3H9V3H2v8h7V8h2v10h4v3h7v-8h-7v3h-2V8h2v3z" />
    </Svg>
);

export default AccountTree;
