import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const ManageSearchRound = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M6 9H3c-.55 0-1-.45-1-1s.45-1 1-1h3c.55 0 1 .45 1 1s-.45 1-1 1zm0 3H3c-.55 0-1 .45-1 1s.45 1 1 1h3c.55 0 1-.45 1-1s-.45-1-1-1zm13.88 6.29-3.12-3.12c-.86.56-1.89.88-3 .82-2.37-.11-4.4-1.96-4.72-4.31-.44-3.35 2.45-6.18 5.83-5.61 1.95.33 3.57 1.85 4 3.78.33 1.46.01 2.82-.7 3.9l3.13 3.13c.39.39.39 1.02 0 1.41-.39.39-1.03.39-1.42 0zM17 11c0-1.65-1.35-3-3-3s-3 1.35-3 3 1.35 3 3 3 3-1.35 3-3zM3 19h8c.55 0 1-.45 1-1s-.45-1-1-1H3c-.55 0-1 .45-1 1s.45 1 1 1z" />
    </Svg>
);

export default ManageSearchRound;
