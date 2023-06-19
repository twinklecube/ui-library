export enum CookieNames {
    TC_COOKIE_CONSENT = 'tc_cookie_consent',
    TC_COOKIE_NECESSARY = 'tc_cookie_necessary',
    TC_COOKIE_FUNCTIONAL = 'tc_cookie_functional',
    TC_COOKIE_ANALYSIS = 'tc_cookie_analysis',
    TC_COOKIE_ADVERTISEMENT = 'tc_cookie_advertisement'
}

export const setCookie = (name: string, value: boolean) => {
    const maxAge = 60 * 60 * 24 * 180;
    document.cookie = `${name}=${value}; max-age=${maxAge}; sameSite=none; Secure`;
}

export const setCookieConsentCookies = (functional: boolean, analysis: boolean, advertisement: boolean) => {
    setCookie(CookieNames.TC_COOKIE_CONSENT, true);
    setCookie(CookieNames.TC_COOKIE_NECESSARY, true);
    setCookie(CookieNames.TC_COOKIE_FUNCTIONAL, functional);
    setCookie(CookieNames.TC_COOKIE_ANALYSIS, analysis);
    setCookie(CookieNames.TC_COOKIE_ADVERTISEMENT, advertisement);
}

export const getCookie = (name: string): boolean => {
    const cookies = document.cookie;
    const cookieValue = cookies
        .split("; ")
        .find(row => row.startsWith(`${name}=`))
        ?.split("=")[1];

    if (!cookieValue) {
        return false;
    }

    return cookieValue === 'true';
}

export const getCookieConsentCookies = () => {
    return {
        functional: getCookie(CookieNames.TC_COOKIE_FUNCTIONAL),
        analysis: getCookie(CookieNames.TC_COOKIE_ANALYSIS),
        advertisement: getCookie(CookieNames.TC_COOKIE_ADVERTISEMENT)
    }
}