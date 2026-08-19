chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.local.set({
    installedAt: Date.now(),
    version: "1.0.0"
  });
});
