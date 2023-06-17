import React, {FC, ReactNode} from 'react';
import {OverlayBackdropWrapper} from './styles';

interface Props {
    children: ReactNode;
    backgroundColor?: string;
    onClick?: () => void;
}
const OverlayBackdrop: FC<Props> = ({
    children,
    backgroundColor =  '#00000080',
    onClick
}) => {
    return (
        <OverlayBackdropWrapper backgroundColor={backgroundColor} onClick={onClick}>
            {children }
        </OverlayBackdropWrapper>
    );
};

export default OverlayBackdrop;