import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const RunningWithErrors = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M22 10v8h-2v-8h2zm-2 10v2h2v-2h-2zm-2-2.71C16.53 18.95 14.39 20 12 20c-4.41 0-8-3.59-8-8s3.59-8 8-8v9l7.55-7.55C17.72 3.34 15.02 2 12 2 6.48 2 2 6.48 2 12s4.48 10 10 10c2.25 0 4.33-.74 6-2v-2.71z" />
    </Svg>
);

export default RunningWithErrors;
