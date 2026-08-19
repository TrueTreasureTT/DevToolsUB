chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.local.set({
    devtoolsOverlay: {
      version: "1.0.0",
      installedAt: Date.now()
    }
  });
});

chrome.runtime.onMessage.addListener((message) => {
  if (message?.type === "PING") {
    return true;
  }
});
