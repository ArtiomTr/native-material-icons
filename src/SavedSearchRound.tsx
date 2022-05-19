import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const SavedSearchRound = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M14.73 13.31c1.13-1.55 1.63-3.58.98-5.74-.68-2.23-2.57-3.98-4.85-4.44-4.65-.93-8.66 3.09-7.72 7.73.46 2.29 2.21 4.18 4.44 4.85 2.16.65 4.19.15 5.74-.98l5.56 5.56c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41l-5.56-5.57zM9.5 14C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
        <Path d="M10.29 8.44 9.5 6l-.79 2.44H6.25l2.01 1.59-.77 2.47 2.01-1.53 2.01 1.53-.77-2.47 2.01-1.59z" />
    </Svg>
);

export default SavedSearchRound;
