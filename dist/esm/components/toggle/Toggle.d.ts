import { FC } from 'react';
interface Props {
    id: string;
    onClick: () => void;
    enabled: boolean;
    disabledBackgroundColor?: string;
    disabledForegroundColor?: string;
    enabledBackgroundColor?: string;
    enabledForegroundColor?: string;
}
declare const Toggle: FC<Props>;
export default Toggle;
