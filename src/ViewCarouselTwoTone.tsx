import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const ViewCarouselTwoTone = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M9 7h6v10H9z" opacity={0.3} />
        <Path d="M2 7h4v10H2V7zm5 12h10V5H7v14zM9 7h6v10H9V7zm9 0h4v10h-4V7z" />
    </Svg>
);

export default ViewCarouselTwoTone;