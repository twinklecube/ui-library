import { FC, ReactNode } from 'react';
interface Props {
    sectionName: string;
    toggleId?: string;
    toggleOnClick?: () => void;
    sectionDescription?: ReactNode;
    alwaysActive?: boolean;
    toggleEnabled?: boolean;
}
declare const CookieSettingItem: FC<Props>;
export default CookieSettingItem;
