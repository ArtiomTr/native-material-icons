import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const PanoramaHorizontalSelect = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M21.43 4c-.1 0-.2.02-.31.06C18.18 5.16 15.09 5.7 12 5.7s-6.18-.55-9.12-1.64C2.77 4.02 2.66 4 2.57 4c-.34 0-.57.23-.57.63v14.75c0 .39.23.62.57.62.1 0 .2-.02.31-.06 2.94-1.1 6.03-1.64 9.12-1.64s6.18.55 9.12 1.64c.11.04.21.06.31.06.33 0 .57-.23.57-.63V4.63c0-.4-.24-.63-.57-.63z" />
    </Svg>
);

export default PanoramaHorizontalSelect;
