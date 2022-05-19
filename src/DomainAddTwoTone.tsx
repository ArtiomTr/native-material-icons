import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const DomainAddTwoTone = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M12 9v2h2v2h-2v2h2v2h-2v2h4v-4h4V9h-8zm6 4h-2v-2h2v2z" opacity={0.3} />
        <Path d="M12 7V3H2v18h14v-2h-4v-2h2v-2h-2v-2h2v-2h-2V9h8v6h2V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm14 12v2h-2v2h-2v-2h-2v-2h2v-2h2v2h2zm-6-8h-2v2h2v-2zm0 4h-2v2h2v-2z" />
    </Svg>
);

export default DomainAddTwoTone;