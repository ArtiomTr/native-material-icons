import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const ViewCozySharp = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M22 4H2v16h20V4zM11.25 16.75h-4v-4h4v4zm0-5.5h-4v-4h4v4zm5.5 5.5h-4v-4h4v4zm0-5.5h-4v-4h4v4z" />
    </Svg>
);

export default ViewCozySharp;
