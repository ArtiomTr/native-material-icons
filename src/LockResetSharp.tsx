import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const LockResetSharp = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M13 3c-4.97 0-9 4.03-9 9H1l4 4 4-4H6c0-3.86 3.14-7 7-7s7 3.14 7 7-3.14 7-7 7c-1.9 0-3.62-.76-4.88-1.99L6.7 18.42C8.32 20.01 10.55 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9zm2 8v-1c0-1.1-.9-2-2-2s-2 .9-2 2v1h-1v5h6v-5h-1zm-1 0h-2v-1c0-.55.45-1 1-1s1 .45 1 1v1z" />
    </Svg>
);

export default LockResetSharp;
