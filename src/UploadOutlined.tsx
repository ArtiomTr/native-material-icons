import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const UploadOutlined = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M9 16h6v-6h4l-7-7-7 7h4v6zm3-10.17L14.17 8H13v6h-2V8H9.83L12 5.83zM5 18h14v2H5z" />
    </Svg>
);

export default UploadOutlined;