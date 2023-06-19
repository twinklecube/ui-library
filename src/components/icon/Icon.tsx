import React, {FC} from 'react';
import {IconWrapper} from "./styles";
import {Colors} from "../../utils";

interface Props {
    size?: number;
    color?: Colors;
    hoverColor?: Colors;
    icon: Array<string>;
}
const Icon: FC<Props> = ({
    size,
    color,
    hoverColor,
    icon
}) => {
    return (
        <IconWrapper
            viewBox="0 0 24 24"
            size={size}
            color={color}
            hoverColor={hoverColor}
        >
            {
                icon.map(((path, index) => <path key={index} d={path} />))
            }
        </IconWrapper>
    );
};

export default Icon;