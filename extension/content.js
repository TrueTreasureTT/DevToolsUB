(() => {
  if (window.top !== window) return;

  const script = document.createElement("script");
  script.src = chrome.runtime.getURL("extension/inject.js");
  script.async = false;

  script.onload = () => script.remove();
  (document.head || document.documentElement).appendChild(script);

  chrome.runtime.onMessage.addListener((message) => {
    if (message?.type === "DEVTOOLS_TOGGLE") {
      window.dispatchEvent(new CustomEvent("DEVTOOLS_OVERLAY_TOGGLE"));
    }
  });
})();
