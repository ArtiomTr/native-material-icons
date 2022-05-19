import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const AddHomeTwoTone = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M12 5.5 6 10v9h5.08c-.62-4.3 2.72-8 6.92-8v-1l-6-4.5z" opacity={0.3} />
        <Path d="M6 19v-9l6-4.5 6 4.5v1c.7 0 1.37.1 2 .29V9l-8-6-8 6v12h7.68c-.3-.62-.5-1.29-.6-2H6z" />
        <Path d="M18 13c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm3 5.5h-2.5V21h-1v-2.5H15v-1h2.5V15h1v2.5H21v1z" />
    </Svg>
);

export default AddHomeTwoTone;
