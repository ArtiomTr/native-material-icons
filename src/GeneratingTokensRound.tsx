import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const GeneratingTokensRound = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="M9 4c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm0 11.5c-.55 0-1-.45-1-1v-4H6.75c-.41 0-.75-.34-.75-.75S6.34 9 6.75 9h4.5c.41 0 .75.34.75.75s-.34.75-.75.75H10v4c0 .55-.45 1-1 1zM20.25 3.75l1.75.79c.39.18.39.73 0 .91l-1.75.79L19.46 8c-.18.39-.73.39-.91 0l-.79-1.75L16 5.46c-.39-.18-.39-.73 0-.91l1.75-.79.79-1.76c.18-.39.73-.39.91 0l.8 1.75zm0 14 1.75.79c.39.18.39.73 0 .91l-1.75.79-.79 1.76c-.18.39-.73.39-.91 0l-.79-1.75-1.76-.79c-.39-.18-.39-.73 0-.91l1.75-.79.79-1.76c.18-.39.73-.39.91 0l.8 1.75z" />
    </Svg>
);

export default GeneratingTokensRound;