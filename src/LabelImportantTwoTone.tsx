import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const LabelImportantTwoTone = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M15 7H7.89l3.57 5-3.57 5H15l3.55-5z" opacity={0.3} />
        <Path d="M16.63 5.84C16.27 5.33 15.67 5 15 5H4l5 7-5 6.99h11c.67 0 1.27-.32 1.63-.83L21 12l-4.37-6.16zM15 17H7.89l3.57-5-3.57-5H15l3.55 5L15 17z" />
    </Svg>
);

export default LabelImportantTwoTone;
