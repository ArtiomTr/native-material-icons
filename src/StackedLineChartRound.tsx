import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const StackedLineChartRound = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="m2.79 14.78-.09-.09a.9959.9959 0 0 1 0-1.41l6.09-6.1c.39-.39 1.02-.39 1.41 0l3.29 3.29 6.39-7.18c.38-.43 1.05-.44 1.45-.04.37.38.39.98.04 1.37l-7.17 8.07c-.38.43-1.04.45-1.45.04L9.5 9.48l-5.3 5.3c-.38.39-1.02.39-1.41 0zm1.41 6 5.3-5.3 3.25 3.25c.41.41 1.07.39 1.45-.04l7.17-8.07c.35-.39.33-.99-.04-1.37-.4-.4-1.07-.39-1.45.04l-6.39 7.18-3.29-3.29a.9959.9959 0 0 0-1.41 0l-6.09 6.1c-.39.39-.39 1.02 0 1.41l.09.09c.39.39 1.03.39 1.41 0z" />
    </Svg>
);

export default StackedLineChartRound;