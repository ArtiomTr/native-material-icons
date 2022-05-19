import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const AreaChartRound = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="m8 17 3.39-4.66c.33-.46.98-.55 1.42-.2L21 18.5v.5c0 .55-.45 1-1 1H4c-.55 0-1-.45-1-1v-5.72c.22 0 .44.07.62.22L8 17zm-5-6c.44 0 .88.15 1.25.44l3.37 2.69 2.77-3.81c.66-.91 1.95-1.1 2.85-.4L21 15.97V8c0-.55-.45-1-1-1h-3l-4.18-3.34c-.45-.36-1.1-.27-1.44.2L7 10 3.6 7.45c-.18-.13-.39-.2-.6-.2V11z" />
    </Svg>
);

export default AreaChartRound;
