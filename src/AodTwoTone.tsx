import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const AodTwoTone = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M17 1.01 7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 21H7v-1h10v1zm0-3H7V6h10v12zm0-14H7V3h10v1zm-9 6h8v1.5H8V10zm1 3h6v1.5H9V13z" />
        <Path d="M7 21h10v-1H7v1zM7 3v1h10V3H7z" opacity={0.3} />
    </Svg>
);

export default AodTwoTone;