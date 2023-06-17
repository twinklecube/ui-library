import styled from 'styled-components';
import {ButtonType, ButtonSize} from './types';
import {Colors} from '../../utils/colors';
const getButtonTypeProperties = (buttonType: ButtonType) => {
    let backgroundColor;
    let color;
    let border;
    switch (buttonType) {
        case ButtonType.PRIMARY:
            backgroundColor = Colors.SECONDARY;
            color = Colors.WHITE;
            border = 'none'
            break;
        case ButtonType.PRIMARY_INVERSE:
            backgroundColor = Colors.WHITE;
            color = Colors.SECONDARY;
            border = `solid 1px ${Colors.SECONDARY}`;
            break;
        default:
            backgroundColor = Colors.SECONDARY;
            color = Colors.WHITE
            border = 'none'
            break;
    }
    return {
        backgroundColor,
        color,
        border
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
  width: ${props => props.streched && '100%'};
`;