import React, {FC, ReactNode} from 'react';
import {HyperlinkWrapper} from './styles';
import Icon from "../icon/Icon";
import {Colors} from "../../utils";

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
const Hyperlink: FC<Props> = ({
    children,
    url,
    onClick,
    icon,
    iconSize,
    color,
    hoverColor,
    fontSize
}) => {
    return (
        <HyperlinkWrapper
            href={url}
            onClick={onClick}
            color={color}
            hoverColor={hoverColor}
            fontSize={fontSize}
        >
            {icon &&
                <Icon
                    icon={icon}
                    color={color}
                    hoverColor={hoverColor}
                    size={iconSize ?? 18}
                />}
            {children}
        </HyperlinkWrapper>
    );
};

export default Hyperlink;