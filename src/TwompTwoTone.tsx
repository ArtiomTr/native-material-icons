import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const TwompTwoTone = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path
            d="M5 19h14V5H5v14zm13-5.5V16c0 .55-.45 1-1 1h-2v1.5h-1.5v-6H17c.55 0 1 .45 1 1zM10 9c0-.55.45-1 1-1h2V7h-3V5.5h3.5c.55 0 1 .45 1 1V8c0 .55-.45 1-1 1h-2v1h3v1.5H10V9zm-4 4.5c0-.55.45-1 1-1h4.5c.55 0 1 .45 1 1v5H11V14h-1v3H8.5v-3h-1v4.5H6v-5z"
            opacity={0.3}
        />
        <Path d="M15 14h1.5v1.5H15z" opacity={0.3} />
        <Path d="M7.5 14h1v3H10v-3h1v4.5h1.5v-5c0-.55-.45-1-1-1H7c-.55 0-1 .45-1 1v5h1.5V14zm6 4.5H15V17h2c.55 0 1-.45 1-1v-2.5c0-.55-.45-1-1-1h-3.5v6zM15 14h1.5v1.5H15V14z" />
        <Path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z" />
        <Path d="M14.5 10h-3V9h2c.55 0 1-.45 1-1V6.5c0-.55-.45-1-1-1H10V7h3v1h-2c-.55 0-1 .45-1 1v2.5h4.5V10z" />
    </Svg>
);

export default TwompTwoTone;