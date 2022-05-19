import * as React from 'react';
import Svg, { SvgProps, Path, Circle } from 'react-native-svg';

const SentimentNeutral = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M9 15.5h6v1H9v-1z" />
        <Circle cx={15.5} cy={9.5} r={1.5} />
        <Circle cx={8.5} cy={9.5} r={1.5} />
        <Path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" />
    </Svg>
);

export default SentimentNeutral;