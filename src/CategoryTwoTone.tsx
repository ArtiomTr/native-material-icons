import * as React from 'react';
import Svg, { SvgProps, Circle, Path } from 'react-native-svg';

const CategoryTwoTone = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Circle cx={17.5} cy={17.5} r={2.5} opacity={0.3} />
        <Path d="M5 15.5h4v4H5zm7-9.66L10.07 9h3.86z" opacity={0.3} />
        <Path d="m12 2-5.5 9h11L12 2zm0 3.84L13.93 9h-3.87L12 5.84zM17.5 13c-2.49 0-4.5 2.01-4.5 4.5s2.01 4.5 4.5 4.5 4.5-2.01 4.5-4.5-2.01-4.5-4.5-4.5zm0 7c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5zM11 13.5H3v8h8v-8zm-2 6H5v-4h4v4z" />
    </Svg>
);

export default CategoryTwoTone;
