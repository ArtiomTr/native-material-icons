import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const CreateNewFolderSharp = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M22 6H12l-2-2H2v16h20V6zm-3 8h-3v3h-2v-3h-3v-2h3V9h2v3h3v2z" />
    </Svg>
);

export default CreateNewFolderSharp;
