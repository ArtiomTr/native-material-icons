import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const GradeRound = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="m12 17.27 5.17 3.12c.38.23.85-.11.75-.54l-1.37-5.88 4.56-3.95c.33-.29.16-.84-.29-.88l-6.01-.51-2.35-5.54c-.17-.41-.75-.41-.92 0L9.19 8.63l-6.01.51c-.44.04-.62.59-.28.88l4.56 3.95-1.37 5.88c-.1.43.37.77.75.54L12 17.27z" />
    </Svg>
);

export default GradeRound;
