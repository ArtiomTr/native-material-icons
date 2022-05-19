import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const UpgradeRound = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M16 19c0 .55-.45 1-1 1H9c-.55 0-1-.45-1-1s.45-1 1-1h6c.55 0 1 .45 1 1zM11 7.99V15c0 .55.45 1 1 1s1-.45 1-1V7.99h1.79c.45 0 .67-.54.35-.85l-2.79-2.78c-.2-.19-.51-.19-.71 0L8.86 7.14c-.32.31-.1.85.35.85H11z" />
    </Svg>
);

export default UpgradeRound;
