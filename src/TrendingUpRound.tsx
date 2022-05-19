import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const TrendingUpRound = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="m16.85 6.85 1.44 1.44-4.88 4.88-3.29-3.29a.9959.9959 0 0 0-1.41 0l-6 6.01c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L9.41 12l3.29 3.29c.39.39 1.02.39 1.41 0l5.59-5.58 1.44 1.44c.31.31.85.09.85-.35V6.5c.01-.28-.21-.5-.49-.5h-4.29c-.45 0-.67.54-.36.85z" />
    </Svg>
);

export default TrendingUpRound;