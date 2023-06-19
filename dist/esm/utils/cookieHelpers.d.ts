export declare enum CookieNames {
    TC_COOKIE_CONSENT = "tc_cookie_consent",
    TC_COOKIE_NECESSARY = "tc_cookie_necessary",
    TC_COOKIE_FUNCTIONAL = "tc_cookie_functional",
    TC_COOKIE_ANALYSIS = "tc_cookie_analysis",
    TC_COOKIE_ADVERTISEMENT = "tc_cookie_advertisement"
}
export declare const setCookie: (name: string, value: boolean) => void;
export declare const setCookieConsentCookies: (functional: boolean, analysis: boolean, advertisement: boolean) => void;
export declare const getCookie: (name: string) => boolean;
export declare const getCookieConsentCookies: () => {
    functional: boolean;
    analysis: boolean;
    advertisement: boolean;
};
