import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const Fax = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M19 9h-1V4H8v16h14v-8c0-1.66-1.34-3-3-3zm-9-3h6v3h-6V6zm4 11h-4v-5h4v5zm2 0c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm0-3c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm3 3c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm0-3c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zM4.5 8C3.12 8 2 9.12 2 10.5v8C2 19.88 3.12 21 4.5 21S7 19.88 7 18.5v-8C7 9.12 5.88 8 4.5 8z" />
    </Svg>
);

export default Fax;