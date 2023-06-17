import { FC, ReactNode } from 'react';
import { ButtonType, ButtonSize } from './types';
interface Props {
    children: ReactNode;
    buttonType?: ButtonType;
    buttonSize?: ButtonSize;
    onClick?: () => void;
    streched?: boolean;
}
declare const Button: FC<Props>;
export default Button;
