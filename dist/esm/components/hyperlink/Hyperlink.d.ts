import { FC, ReactNode } from 'react';
import { Colors } from "../../utils";
interface Props {
    children: ReactNode;
    url?: string;
    onClick?: () => void;
    icon?: Array<string>;
    iconSize?: number;
    color?: Colors;
    hoverColor?: Colors;
    fontSize?: number;
}
declare const Hyperlink: FC<Props>;
export default Hyperlink;
