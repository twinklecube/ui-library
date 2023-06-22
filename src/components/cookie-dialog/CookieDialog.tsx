import React, {FC, useEffect, useState} from 'react';
import OverlayBackdrop from '../overlay-backdrop/OverlayBackdrop';
import {
    CookieDialogAcceptSelectedLink,
    CookieDialogBody,
    CookieDialogBodyLinks,
    CookieDialogFooter,
    CookieDialogFooterButtons,
    CookieDialogHeader,
    CookieDialogSettings,
    CookieDialogWrapper
} from './styles';
import Button from '../button/Button';
import {ButtonSize, ButtonType} from '../button';
import Hyperlink from '../hyperlink/Hyperlink';
import {Colors, Icons} from "../../utils";
import CookieSettingItem from "../cookie-setting-item/CookieSettingItem";
import {
    getCookieConsentCookies,
    setCookieConsentCookies
} from "../../utils";

interface Props {
    onCookieAccept: () => void
}

const CookieDialog: FC<Props> = ({onCookieAccept}) => {
    const [showSettings, setShowSettings] = useState<boolean>(false);
    const [functionalCookies, setFunctionalCookies] = useState(false);
    const [analysisCookies, setAnalysisCookies] = useState(false);
    const [advertisementCookies, setAdvertisementCookies] = useState(false);

    useEffect(() => {
        const {functional, analysis, advertisement} = getCookieConsentCookies();
        setFunctionalCookies(functional);
        setAnalysisCookies(analysis);
        setAdvertisementCookies(advertisement);
    }, []);
    const handleShowSettingsClick = () => {
        setShowSettings(prevState => !prevState);
    }

    const handleAcceptSelectedCookies = () => {
        onCookieAccept();
        setCookieConsentCookies(functionalCookies, analysisCookies, advertisementCookies);
    }

    const handleRejectAllCookies = () => {
        onCookieAccept();
        setCookieConsentCookies(false, false, false);
    }

    const handleAcceptAllCookies = () => {
        onCookieAccept();
        setCookieConsentCookies(true, true, true);
    }

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
                    <CookieDialogBodyLinks>
                        <Hyperlink
                            icon={showSettings ? Icons.ARROW_BACK : Icons.SETTINGS}
                            color={Colors.SECONDARY}
                            hoverColor={Colors.SECONDARY_DARKER}
                            onClick={handleShowSettingsClick}
                            fontSize={14}
                        >Anpassen</Hyperlink>
                        <Hyperlink url='/legal/datenschutz' fontSize={14}>Datenschutz</Hyperlink>
                        <Hyperlink url='/legal/impressum' fontSize={14}>Impressum</Hyperlink>
                    </CookieDialogBodyLinks>
                    {showSettings && <CookieDialogSettings>
                            <CookieSettingItem
                                sectionName="Notwendig"
                                sectionDescription={<>
                                    <p>
                                        Notwendige Cookies sind für die Grundfunktionen der Website von entscheidender
                                        Bedeutung. Ohne sie kann die Website nicht in der vorgesehenen Weise funktionieren.
                                    </p>
                                    <p>Diese Cookies speichern keine personenbezogenen Daten.</p>
                                </>}
                                alwaysActive
                            />
                            <CookieSettingItem
                                sectionName="Funktionale"
                                toggleId="functionale"
                                toggleOnClick={() => setFunctionalCookies(prevState => !prevState)}
                                toggleEnabled={functionalCookies}
                                sectionDescription={<>
                                    <p>
                                        Funktionale Cookies unterstützen bei der Ausführung bestimmter Funktionen,
                                        z. B. beim Teilen des Inhalts der Website auf Social Media-Plattformen,
                                        beim Sammeln von Feedbacks und anderen Funktionen von Drittanbietern.
                                    </p>
                                </>}
                            />
                            <CookieSettingItem
                                sectionName="Analyse"
                                toggleId="analyse"
                                toggleOnClick={() => setAnalysisCookies(prevState => !prevState)}
                                toggleEnabled={analysisCookies}
                                sectionDescription={<>
                                    <p>
                                        Analyse-Cookies werden verwendet um zu verstehen, wie Besucher mit der Website
                                        interagieren. Diese Cookies dienen zu Aussagen über die Anzahl der Besucher,
                                        Absprungrate, Herkunft der Besucher usw.
                                    </p>
                                </>}
                            />
                            <CookieSettingItem
                                sectionName="Werbe"
                                toggleId="werbe"
                                toggleOnClick={() => setAdvertisementCookies(prevState => !prevState)}
                                toggleEnabled={advertisementCookies}
                                sectionDescription={<>
                                    <p>
                                        Werbe-Cookies werden verwendet, um Besuchern auf der Grundlage der von ihnen zuvor
                                        besuchten Seiten maßgeschneiderte Werbung zu liefern und die Wirksamkeit von
                                        Werbekampagne nzu analysieren.
                                    </p>
                                </>}
                            />
                            <CookieDialogAcceptSelectedLink>
                                <Hyperlink
                                    fontSize={14}
                                    color={Colors.SECONDARY}
                                    hoverColor={Colors.SECONDARY_DARKER}
                                    onClick={handleAcceptSelectedCookies}
                                >Ausgewählte akzeptieren</Hyperlink>
                            </CookieDialogAcceptSelectedLink>
                        </CookieDialogSettings>}

                </CookieDialogBody>
                <CookieDialogFooter>
                    <CookieDialogFooterButtons>
                        <Button
                            buttonSize={ButtonSize.SMALL}
                            buttonType={ButtonType.PRIMARY_INVERSE}
                            streched
                            onClick={handleRejectAllCookies}
                        >
                            Alle ablehnen</Button>
                        <Button
                            buttonSize={ButtonSize.SMALL}
                            streched
                            onClick={handleAcceptAllCookies}
                        >
                            Alle zulassen
                        </Button>
                    </CookieDialogFooterButtons>
                    <Hyperlink url='/legal/cookieuebersicht' fontSize={14}>Cookieübersicht</Hyperlink>
                </CookieDialogFooter>
            </CookieDialogWrapper>
        </OverlayBackdrop>
    );
};

export default CookieDialog;