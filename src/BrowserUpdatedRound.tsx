import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const BrowserUpdatedRound = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M15 3c.55 0 1 .45 1 1v6h1.59c.89 0 1.34 1.08.71 1.71l-2.59 2.59c-.39.39-1.02.39-1.41 0l-2.59-2.59c-.63-.63-.19-1.71.7-1.71H14V4c0-.55.45-1 1-1zM6 19.59c0 .78.63 1.41 1.41 1.41h9.17c.78 0 1.41-.63 1.41-1.41 0-.72-.44-1.03-1-1.59h3c1.1 0 2-.9 2-2v-2c0-.55-.45-1-1-1s-1 .45-1 1v2H4V5h7c.55 0 1-.45 1-1s-.45-1-1-1H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h3c-.55.55-1 .87-1 1.59z" />
    </Svg>
);

export default BrowserUpdatedRound;
