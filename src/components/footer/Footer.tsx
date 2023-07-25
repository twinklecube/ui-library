import React, {FC, useEffect, useState} from 'react';
import CookieDialog from '../cookie-dialog/CookieDialog';
import {CookieNames, getCookie} from "../../utils";
import {FooterCopyRight, FooterLinks, FooterWrapper} from "./styles";
import Hyperlink from "../hyperlink/Hyperlink";
import {Colors, Icons} from "../../utils";
import GoogleAdSense from "../google-ad-sense/googleAdSense";

export const Footer: FC  = () => {
    const [showCookieDialog, setShowCookieDialog] = useState(false);
    const [necessaryAdCookies, setNecessaryAdCookies] = useState(false);

    useEffect(() => {
        const tcCookieConsent = getCookie(CookieNames.TC_COOKIE_CONSENT);
        tcCookieConsent && setNecessaryAdCookies(true);
        setTimeout(() => {
            setShowCookieDialog(!tcCookieConsent);
        }, 500);
    }, []);

    const onCookieAccept = () => {
        setShowCookieDialog(false);
        setNecessaryAdCookies(true);
    }

    const handleReviewCookiePolicy = () => {
        setShowCookieDialog(true);
    }

    return (
        <FooterWrapper>
            {showCookieDialog && <CookieDialog onCookieAccept={onCookieAccept} />}
            <FooterLinks>
                <Hyperlink fontSize={12} url="/legal/impressum" color={Colors.WHITE}>Impressum</Hyperlink>
                <Hyperlink fontSize={12} url='/legal/datenschutz' color={Colors.WHITE}>Datenschutz</Hyperlink>
                <Hyperlink fontSize={12} url='/legal/cookieuebersicht' color={Colors.WHITE}>Cookieübersicht</Hyperlink>
                <Hyperlink
                    fontSize={12}
                    onClick={handleReviewCookiePolicy}
                    icon={Icons.COOKIE}
                    color={Colors.SECONDARY}
                    hoverColor={Colors.SECONDARY_DARKER}
                >Cookie Einstellungen</Hyperlink>
            </FooterLinks>
            <FooterCopyRight>
                &copy;
                2023 Twinklecube. Alle Rechte vorbehalten.
            </FooterCopyRight>
            {necessaryAdCookies && <GoogleAdSense />}
        </FooterWrapper>
    );
};