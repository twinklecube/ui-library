import React from 'react';
import OverlayBackdrop from '../overlay-backdrop/OverlayBackdrop';
import {
    CookieDialogWrapper,
    CookieDialogHeader,
    CookieDialogBody,
    CookieDialogFooter,
    CookieDialogFooterButtons
} from './styles';
import Button from '../button/Button';
import {ButtonType, ButtonSize} from '../button/types';

const CookieDialog = () => {
    return (
        <OverlayBackdrop>
            <CookieDialogWrapper>
                <CookieDialogHeader>Wir respektieren Ihre Privatsphäre</CookieDialogHeader>
                <CookieDialogBody>
                    <p>
                        Wir verwenden Cookies, um Ihr Surferlebnis zu verbessern, personalisierte Anzeigen oder
                        Inhalte einzusetzen und unseren Datenverkehr zu analysieren. Wenn Sie auf „Alle akzeptieren"
                        klicken, stimmen Sie der Anwendung von Cookies zu.
                    </p>
                </CookieDialogBody>
                <CookieDialogFooter>
                    <CookieDialogFooterButtons>
                        <Button
                            buttonSize={ButtonSize.SMALL}
                            buttonType={ButtonType.PRIMARY_INVERSE}
                            streched
                        >
                            Alle ablehnen</Button>
                        <Button
                            buttonSize={ButtonSize.SMALL}
                            streched
                        >
                            Alle zulassen
                        </Button>
                    </CookieDialogFooterButtons>

                </CookieDialogFooter>
            </CookieDialogWrapper>
        </OverlayBackdrop>
    );
};

export default CookieDialog;