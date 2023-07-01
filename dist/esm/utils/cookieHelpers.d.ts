export declare enum CookieNames {
    TC_COOKIE_CONSENT = "tc_cookie_consent",
    TC_COOKIE_NECESSARY = "tc_cookie_necessary",
    TC_COOKIE_FUNCTIONAL = "tc_cookie_functional",
    TC_COOKIE_ANALYSIS = "tc_cookie_analysis",
    TC_COOKIE_ADVERTISEMENT = "tc_cookie_advertisement",
    TC_COOKIE_CONSENT_ID = "tc_cookie_consent_id"
}
export declare const setCookie: (name: string, value: string | boolean, numDays: number) => void;
export declare const setCookieConsentCookies: (functional: boolean, analysis: boolean, advertisement: boolean, cookieConsentId: string | boolean) => void;
export declare const getCookie: (name: string) => boolean | string;
export declare const getCookieConsentCookies: () => {
    functional: boolean;
    analysis: boolean;
    advertisement: boolean;
    cookieConsentId: string | boolean;
};
