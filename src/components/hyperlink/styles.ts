import styled from 'styled-components';
import {Colors} from '../../utils';

interface HyperlinkWrapperProps {
    color?: Colors;
    hoverColor?: Colors;
    fontSize?: number;
}
export const HyperlinkWrapper = styled.a<HyperlinkWrapperProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  font-size: ${props => props.fontSize ?? 16}px;
  color: ${props => props.color ?? Colors.BLACK};
  cursor: pointer;
  text-decoration: none;
  transition: 0.3s;
  &:hover {
    color: ${props => props.hoverColor ?? Colors.GREY};
  }

  &:hover svg path {
    fill: ${props => props.hoverColor ?? Colors.GREY};
  }
`;