import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const LocalPizzaOutlined = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M12 2C8.43 2 5.23 3.54 3.01 6L12 22l8.99-16C18.78 3.55 15.57 2 12 2zm0 15.92L5.51 6.36C7.32 4.85 9.62 4 12 4s4.68.85 6.49 2.36L12 17.92zM9 5.5c-.83 0-1.5.67-1.5 1.5S8.17 8.5 9 8.5s1.5-.67 1.5-1.5S9.82 5.5 9 5.5zm1.5 7.5c0 .83.67 1.5 1.5 1.5.82 0 1.5-.67 1.5-1.5s-.68-1.5-1.5-1.5-1.5.67-1.5 1.5z" />
    </Svg>
);

export default LocalPizzaOutlined;
