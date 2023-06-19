import React, {FC, ReactNode, useState} from 'react';
import {CookieSettingItemBrief, CookieSettingItemDescription, CookieSettingItemWrapper} from "./styles";
import Hyperlink from "../hyperlink/Hyperlink";
import {Icons} from "../../utils";
import Toggle from "../toggle/Toggle";

interface Props {
    sectionName: string;
    toggleId?: string;
    toggleOnClick?: () => void;
    sectionDescription?: ReactNode;
    alwaysActive?: boolean;
    toggleEnabled?: boolean;
}
const CookieSettingItem: FC<Props> = ({
    sectionName,
    alwaysActive,
    toggleId,
    toggleOnClick,
    sectionDescription,
    toggleEnabled
}) => {
    const [showDescription, setShowDescription] = useState<boolean>(false);

    const handleExpandClick = () => {
        setShowDescription(prevState => !prevState);
    }

    return (
        <CookieSettingItemWrapper>
            <CookieSettingItemBrief>
                <Hyperlink
                    icon={showDescription ? Icons.CHEVRON_DOWN : Icons.CHEVRON_RIGHT}
                    iconSize={22}
                    onClick={handleExpandClick}
                    fontSize={14}
                >
                    {sectionName}
                </Hyperlink>
                <>
                    {alwaysActive && 'Immer aktiv'}
                    {toggleId && toggleOnClick && <Toggle id={toggleId} onClick={toggleOnClick} enabled={toggleEnabled ?? false} />}
                </>
            </CookieSettingItemBrief>
            {showDescription && <CookieSettingItemDescription>{sectionDescription}</CookieSettingItemDescription>}
        </CookieSettingItemWrapper>
    );
};

export default CookieSettingItem;