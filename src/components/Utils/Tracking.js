import ReactGA from "react-ga";
// import { useContext } from "react";
import { OnDevEnv, OnProdEnv } from "./Utils";
// import { AppContext } from "./ContextProvider";

const didInitialized = false;

export const initGA = (trackingID) => {
    if (OnProdEnv()) {
        ReactGA.initialize('UA-25385483-2', {
            siteSpeedSampleRate: 100
        });
        console.log('did initGA');
    }
}

export const PageView = () => {
    if (OnProdEnv()) {
        ReactGA.pageview(window.location.pathname + window.location.search);
        console.log('In pageview: ', window.location.pathname);
    }
}

/**
 * Event - Add custom tracking event.
 * @param {string} category Typically the object that was interacted with (e.g. 'Hamburger Button')
 * @param {string} action The type of interaction (e.g. 'Close Hamburger Button or Open Hamburger Button')
 * @param {string} label Useful for categorizing events (e.g. 'Fall Campaign')
 */
export const GAEvent = (category, action, label) => {
    if (OnDevEnv()) {
        console.log('OnDevEnv, Event wont be send');
        console.log('GA Event: \nCategory:', category, '\nAction: ', action, '\nLabel: ', label);
    } else {
        if (label)
            ReactGA.event({
                category: category,
                action: action,
                label: label
            });
        else
            ReactGA.event({
                category: category,
                action: action
            });
    }
};


export const GAEventCat = {
    "NAVIGATION_BAR": "Navigation Bar",

    "TOOLS_FOR_RENT_PAGE": "Tools For Rent Page",

    "CARD_BAR_Main_Page": "Card Bar Main Page",

    "CATEGORY_PAGE": "Category Page",

    "TOOL_PAGE": "Tool Page",

    "ARTICLE_PAGE": "Article Page",

    "CONTACT_PAGE": "Contact Page",

    "FOOTER": "Footer",

    "NO_MATCH_PAGE": "No Match Page",
}

export const GAEventAction = {
    //Main page actions
    "PAGE_VIEWED": "Page viewed",

    //Navigation bar actions
    "HEADER_LINK_CLICKED": "Header Link Clicked",
    "CLOSE_HAMBURGER_MENU": "Close hamburger menu",
    "OPEN_HAMBURGER_MENU": "Open Hamburger menu",

    //Main Page Cards actions
    "WATCH_ALL_CLICKED": "Watch All Clicked",
    "CARD_CLICKED": "Card Clicked",
    "CATEGORY_CARD_CLICKED": "Category Card Clicked",
    "TOOL_CARD_CLICKED": "Tool Card Clicked",

    "ITEM_CLICKED": "Item Clicked",

    "TOOL_CLICKED": "Tool Clicked",

    "OPEN_LIGHT_BOX_IMAGE": "Open Light Box Image",

    "CLICKED_ON_SEND_BUTTON": "Clicked On Send Button",
}