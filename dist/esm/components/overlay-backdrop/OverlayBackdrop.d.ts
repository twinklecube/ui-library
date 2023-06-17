import { FC, ReactNode } from 'react';
interface Props {
    children: ReactNode;
    backgroundColor?: string;
    onClick?: () => void;
}
declare const OverlayBackdrop: FC<Props>;
export default OverlayBackdrop;
