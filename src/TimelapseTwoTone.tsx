import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const TimelapseTwoTone = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path
            d="M12 3.99c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm4.25 12.24c-2.35 2.34-6.15 2.34-8.49 0L12 11.99v-6c1.54 0 3.07.59 4.24 1.76 2.35 2.34 2.35 6.14.01 8.48z"
            opacity={0.3}
        />
        <Path d="M16.24 7.75c-1.17-1.17-2.7-1.76-4.24-1.76v6l-4.24 4.24c2.34 2.34 6.14 2.34 8.49 0 2.34-2.34 2.34-6.14-.01-8.48zM12 1.99c-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10-4.48-10-10-10zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" />
    </Svg>
);

export default TimelapseTwoTone;
