import * as React from 'react';
import Svg, { SvgProps, Circle, Path } from 'react-native-svg';

const CompassCalibrationSharp = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Circle cx={12} cy={17} r={4} />
        <Path d="M12 3C8.1 3 4.56 4.59 2 7.15l5 5c1.28-1.28 3.05-2.08 5-2.08s3.72.79 5 2.07l5-5C19.44 4.59 15.9 3 12 3z" />
    </Svg>
);

export default CompassCalibrationSharp;