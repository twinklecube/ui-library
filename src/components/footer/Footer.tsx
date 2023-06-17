import React, {FC, useState} from 'react';
import CookieDialog from '../cookie-dialog/CookieDialog';
export const Footer: FC  = () => {
    const [showCookieDialog, setShowCookieDialog] = useState(false);
    return (
        <div>
            {showCookieDialog && <CookieDialog />}
            <div onClick={() => setShowCookieDialog(prevState => !prevState)}>toggle cookiw dialog</div>
            footer - ui
        </div>
    );
};