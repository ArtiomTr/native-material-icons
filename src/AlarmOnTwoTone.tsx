import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const AlarmOnTwoTone = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path
            d="M12 6c-3.86 0-7 3.14-7 7s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm-1.47 10.64-3.18-3.18 1.06-1.06 2.13 2.13 4.93-4.95 1.06 1.06-6 6z"
            opacity={0.3}
        />
        <Path d="M10.54 14.53 8.41 12.4l-1.06 1.06 3.18 3.18 6-6-1.06-1.06zm6.797-12.72 4.607 3.845-1.28 1.535-4.61-3.843zm-10.674 0 1.282 1.536L3.337 7.19l-1.28-1.536zM12 4c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9zm0 16c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7z" />
    </Svg>
);

export default AlarmOnTwoTone;
