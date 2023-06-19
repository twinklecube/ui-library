import styled from "styled-components";
import {Colors} from "../../utils";


interface IconWrapperProps {
    size?: number;
    color?: Colors;
    hoverColor?: Colors;
}
export const IconWrapper = styled.svg<IconWrapperProps>`
  width: ${props => props.size ?? 24}px;
  height: ${props => props.size ?? 24}px;
  cursor: pointer;
  transition: 0.3s;

  path {
    transition: all 0.3s;
    fill: ${props => props.color ?? Colors.BLACK};;
  }

  &:hover {
    path {
      fill: ${props => props.hoverColor ?? Colors.GREY};
    }
  }
`;