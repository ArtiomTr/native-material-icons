import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const PhotoLibrarySharp = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M22 18V2H6v16h16zm-11-6 2.03 2.71L16 11l4 5H8l3-4zM2 6v16h16v-2H4V6H2z" />
    </Svg>
);

export default PhotoLibrarySharp;