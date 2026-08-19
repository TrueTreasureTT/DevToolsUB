(() => {
  if (window.top !== window) return;

  const script = document.createElement("script");
  script.src = chrome.runtime.getURL("inject.js");
  script.onload = () => script.remove();

  (document.head || document.documentElement).appendChild(script);

  chrome.runtime.onMessage.addListener((message) => {
    if (message?.type === "TOGGLE_DEVTOOLS_OVERLAY") {
      window.dispatchEvent(
        new CustomEvent("DEVTOOLS_OVERLAY_TOGGLE")
      );
    }
  });
})();
