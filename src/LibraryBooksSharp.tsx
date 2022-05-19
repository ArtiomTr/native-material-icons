import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const LibraryBooksSharp = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M4 6H2v16h16v-2H4V6zm18-4H6v16h16V2zm-3 9H9V9h10v2zm-4 4H9v-2h6v2zm4-8H9V5h10v2z" />
    </Svg>
);

export default LibraryBooksSharp;
