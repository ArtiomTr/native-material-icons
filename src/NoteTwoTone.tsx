import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const NoteTwoTone = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M15 6H4v12.01h16V11h-5z" opacity={0.3} />
        <Path d="M4 4c-1.1 0-2 .9-2 2v12.01c0 1.1.9 1.99 2 1.99h16c1.1 0 2-.9 2-2v-8l-6-6H4zm16 14.01H4V6h11v5h5v7.01z" />
    </Svg>
);

export default NoteTwoTone;