import styled from 'styled-components';
import {ButtonType, ButtonSize} from './types';
import {Colors} from '../../utils';
const getButtonTypeProperties = (buttonType: ButtonType) => {
    let backgroundColor;
    let color;
    let border;
    let hoverBackgroundColor;
    let hoverColor;
    let hoverBorder;
    switch (buttonType) {
        case ButtonType.PRIMARY:
            backgroundColor = Colors.SECONDARY;
            hoverBackgroundColor = Colors.SECONDARY_DARKER;
            color = Colors.WHITE;
            border = 'none'
            break;
        case ButtonType.PRIMARY_INVERSE:
            backgroundColor = Colors.WHITE;
            color = Colors.SECONDARY;
            border = `solid 2px ${Colors.SECONDARY}`;
            hoverColor = Colors.SECONDARY_DARKER;
            hoverBorder = `solid 2px ${Colors.SECONDARY_DARKER}`;
            break;
        default:
            backgroundColor = Colors.SECONDARY;
            hoverBackgroundColor = Colors.SECONDARY_DARKER;
            color = Colors.WHITE
            border = 'none'
            break;
    }
    return {
        backgroundColor,
        color,
        border,
        hoverColor,
        hoverBorder,
        hoverBackgroundColor
    }
}

const getButtonSizeProperties = (buttonSize: ButtonSize) => {
    let height;
    let paddingLeftAndRight;
    let fontSize;

    switch (buttonSize) {
        case ButtonSize.SMALL:
            height =  '2rem';
            paddingLeftAndRight =  '1.5rem';
            fontSize = '1.2rem';
            break;
        case ButtonSize.MEDIUM:
            height = '2.5rem';
            paddingLeftAndRight = '2rem';
            fontSize = '2rem';
            break;
        case ButtonSize.LARGE:
            height = '3.5rem';
            paddingLeftAndRight = '3rem';
            fontSize = '2.5rem';
            break;
        default:
            height =  '2rem';
            paddingLeftAndRight =  '1.5rem';
            fontSize = '1.2rem';
            break
    }

    return {
        height,
        paddingLeftAndRight,
        fontSize
    }
}
interface ButtonWrapperProps {
    buttonType: ButtonType;
    buttonSize: ButtonSize;
    streched?: boolean;
}
export const ButtonWrapper = styled.button<ButtonWrapperProps>`
  flex: ${props => props.streched && '1'};
  white-space: nowrap;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: ${props => `0 ${getButtonSizeProperties(props.buttonSize).paddingLeftAndRight}`};
  height: ${props => getButtonSizeProperties(props.buttonSize).height};
  font-size: ${props => getButtonSizeProperties(props.buttonSize).fontSize};
  background-color: ${props => getButtonTypeProperties(props.buttonType).backgroundColor};
  color: ${props => getButtonTypeProperties(props.buttonType).color};
  border: ${props => getButtonTypeProperties(props.buttonType).border};
  transition: 0.3s;
  cursor: pointer;
  &:hover {
    color: ${props => getButtonTypeProperties(props.buttonType).hoverColor};
    background-color: ${props => getButtonTypeProperties(props.buttonType).hoverBackgroundColor};
    border: ${props => getButtonTypeProperties(props.buttonType).hoverBorder};
  }
`;