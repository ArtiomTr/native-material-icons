import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const TextDecreaseRound = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M2.61 19c.48 0 .91-.3 1.06-.75l1.01-2.83h5.65l.99 2.82c.16.46.59.76 1.07.76.79 0 1.33-.79 1.05-1.52L9.19 6.17C8.93 5.47 8.25 5 7.5 5s-1.43.47-1.69 1.17L1.56 17.48c-.28.73.27 1.52 1.05 1.52zM7.44 7.6h.12l2.03 5.79H5.41L7.44 7.6zM15 12c0-.55.45-1 1-1h6c.55 0 1 .45 1 1s-.45 1-1 1h-6c-.55 0-1-.45-1-1z" />
    </Svg>
);

export default TextDecreaseRound;
