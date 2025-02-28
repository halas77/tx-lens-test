import { SUPPORTED_DOMAINS } from "./constants";

export const checkCurrentSite = async () => {
  try {
    const [tab] = await chrome.tabs.query({
      active: true,
      currentWindow: true,
    });

    if (tab.url) {
      const url = new URL(tab.url);
      const isSupported: boolean | null = SUPPORTED_DOMAINS.some((domain) =>
        url.hostname.endsWith(domain)
      );
      return isSupported;
    } else {
      return false;
    }
  } catch (error) {
    console.error("Error checking current site:", error);
    return false;
  }
};

export const getUrlFromChrome = async () => {
  try {
    const [tab] = await chrome.tabs.query({
      active: true,
      currentWindow: true,
    });

    return tab.url;
  } catch (error) {
    console.error("Error fetching URL from Chrome:", error);
    return null;
  }
};
