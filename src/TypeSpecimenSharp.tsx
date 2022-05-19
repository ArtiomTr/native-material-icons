import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const TypeSpecimenSharp = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M4 6H2v16h16v-2H4z" />
        <Path d="M22 2H6v16h16V2zm-5.37 12.5-.8-2.3H12.2l-.82 2.3H9.81l3.38-9h1.61l3.38 9h-1.55z" />
        <Path d="m13.96 7.17-1.31 3.72h2.69l-1.3-3.72z" />
    </Svg>
);

export default TypeSpecimenSharp;