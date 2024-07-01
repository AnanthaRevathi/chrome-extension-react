chrome.webNavigation.onBeforeNavigate.addListener((details) => {
    chrome.storage.sync.get("blocklist", (data) => {
      const blocklist = data.blocklist || [];
      const url = new URL(details.url);
      if (blocklist.includes(url.hostname)) {
        chrome.tabs.update(details.tabId, { url: chrome.runtime.getURL("blocked.html") });
      }
    });
  }, { url: [{ urlMatches: "<all_urls>" }] });
  