import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const ScreenSearchDesktop = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M20 18c1.1 0 1.99-.9 1.99-2L22 6c0-1.11-.9-2-2-2H4c-1.11 0-2 .89-2 2v10c0 1.1.89 2 2 2H0v2h24v-2h-4ZM4 16V6h16v10.01L4 16Zm5.0967-6.0469c0-1.027.836-1.864 1.864-1.864 1.027 0 1.864.837 1.864 1.864 0 1.027-.837 1.864-1.864 1.864-1.028 0-1.864-.837-1.864-1.864Zm7.032 4.236-2.482-2.482c.331-.505.527-1.107.527-1.754 0-1.772-1.441-3.213-3.213-3.213s-3.214 1.441-3.214 3.213 1.442 3.214 3.214 3.214c.636 0 1.225-.192 1.724-.511l2.489 2.488.955-.955Z" />
    </Svg>
);

export default ScreenSearchDesktop;
