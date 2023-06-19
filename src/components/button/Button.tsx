import React, {FC, ReactNode} from 'react';
import {ButtonWrapper} from './styles';
import {ButtonType, ButtonSize} from './types';
interface Props {
    children: ReactNode;
    buttonType?: ButtonType;
    buttonSize?: ButtonSize;
    onClick?: () => void;
    streched?: boolean;
}
const Button: FC<Props> = ({
    children,
    buttonType = ButtonType.PRIMARY,
    buttonSize = ButtonSize.MEDIUM,
    onClick,
    streched
}) => {
    return (
        <ButtonWrapper
            buttonType = {buttonType}
            buttonSize = {buttonSize}
            onClick={onClick}
            streched={streched}
        >
            {children}
        </ButtonWrapper>
    );
};

export default Button;