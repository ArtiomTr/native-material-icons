import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const AccountBalance = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M4 10h3v7H4zm6.5 0h3v7h-3zM2 19h20v3H2zm15-9h3v7h-3zm-5-9L2 6v2h20V6z" />
    </Svg>
);

export default AccountBalance;
