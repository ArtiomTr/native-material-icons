import * as React from 'react';
import Svg, { SvgProps, Circle, Path } from 'react-native-svg';

const PlagiarismSharp = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Circle cx={11.5} cy={14.5} r={1.5} />
        <Path d="M14 2H4v20h16V8l-6-6zm1.04 17.45-1.88-1.88c-1.33.71-3.01.53-4.13-.59-1.37-1.37-1.37-3.58 0-4.95s3.58-1.37 4.95 0c1.12 1.12 1.31 2.8.59 4.13l1.88 1.88-1.41 1.41zM13 9V3.5L18.5 9H13z" />
    </Svg>
);

export default PlagiarismSharp;
