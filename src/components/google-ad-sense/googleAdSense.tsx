import React, {FC, useEffect} from 'react';

const GoogleAdSense: FC = () => {

    useEffect(() => {
        const installGoogleAds = () => {
            const googleAdSenseScript = document.createElement('script');
            googleAdSenseScript.src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3289848278033929";
            googleAdSenseScript.async = true;
            googleAdSenseScript.defer = true;
            googleAdSenseScript.crossOrigin = 'anonymous';
            document.body.insertBefore(googleAdSenseScript, document.body.firstChild);
        };
        installGoogleAds();
    }, [])

    return null;
};

export default GoogleAdSense;