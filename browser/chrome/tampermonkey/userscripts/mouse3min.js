(function() {
    'use strict';

    // 1. Identify which site we are on
    const host = window.location.hostname;
    let siteName = "Unknown Site";

    if (host.includes("my.wealthsimple.com")) {
        siteName = "Wealthsimple Portfolio";
    } else if (host.includes("interactivebrokers")) {
        siteName = "IBKR Client Portal";
    } else if (host.includes("webbroker.td.com")) {
        siteName = "TD WebBroker Portal";        
    } else if (host.includes("easyweb.td.com")) {
        siteName = "TD Easyweb Portal";           
    //} else if (host.includes("td")) {
    //    siteName = "TD Easyweb and WebBroker Portal";            
    }


    console.log(`[Automation] ${siteName} Keep-Alive is now ACTIVE.`);

    // 2. Set the interval (180,000ms = 3 minutes)
    setInterval(() => {
        // Simulate a mouse move event
        const mouseEvent = new MouseEvent('mousemove', {
            view: window,
            bubbles: true,
            cancelable: true
        });
        
        window.dispatchEvent(mouseEvent);

        // Site-specific logging
        const timestamp = new Date().toLocaleTimeString();
        console.log(`[${timestamp}] Pinged ${siteName} to prevent logout.`);
        
    }, 180000); 
})();