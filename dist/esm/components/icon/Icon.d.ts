import { FC } from 'react';
import { Colors } from "../../utils";
interface Props {
    size?: number;
    color?: Colors;
    hoverColor?: Colors;
    icon: Array<string>;
}
declare const Icon: FC<Props>;
export default Icon;
