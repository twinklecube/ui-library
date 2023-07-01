export enum CookieNames {
    TC_COOKIE_CONSENT = 'tc_cookie_consent',
    TC_COOKIE_NECESSARY = 'tc_cookie_necessary',
    TC_COOKIE_FUNCTIONAL = 'tc_cookie_functional',
    TC_COOKIE_ANALYSIS = 'tc_cookie_analysis',
    TC_COOKIE_ADVERTISEMENT = 'tc_cookie_advertisement',
    TC_COOKIE_CONSENT_ID= 'tc_cookie_consent_id'
}

export const setCookie = (name: string, value: string | boolean, numDays: number) => {
    const maxAge = 60 * 60 * 24 * numDays;
    document.cookie = `${name}=${value}; max-age=${maxAge}; sameSite=none; Secure`;
}

export const setCookieConsentCookies = (functional: boolean, analysis: boolean, advertisement: boolean, cookieConsentId: string | boolean) => {
    setCookie(CookieNames.TC_COOKIE_CONSENT, true, 180);
    setCookie(CookieNames.TC_COOKIE_NECESSARY, true, 180);
    setCookie(CookieNames.TC_COOKIE_FUNCTIONAL, functional, 180);
    setCookie(CookieNames.TC_COOKIE_ANALYSIS, analysis, 180);
    setCookie(CookieNames.TC_COOKIE_ADVERTISEMENT, advertisement, 180);
    setCookie(CookieNames.TC_COOKIE_CONSENT_ID, cookieConsentId, 720);
}

export const getCookie = (name: string): boolean | string => {
    const cookies = document.cookie;
    const cookieValue = cookies
        .split("; ")
        .find(row => row.startsWith(`${name}=`))
        ?.split("=")[1];

    if (!cookieValue) {
        return false;
    }

    return cookieValue;
}

export const getCookieConsentCookies = () => {
    const functional = getCookie(CookieNames.TC_COOKIE_FUNCTIONAL) === 'true';
    const analysis = getCookie(CookieNames.TC_COOKIE_ANALYSIS) === 'true';
    const advertisement = getCookie(CookieNames.TC_COOKIE_ADVERTISEMENT) === 'true';
    return {
        functional,
        analysis,
        advertisement,
        cookieConsentId: getCookie(CookieNames.TC_COOKIE_CONSENT_ID)
    }
}