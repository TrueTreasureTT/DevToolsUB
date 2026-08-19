document.getElementById("open").addEventListener("click", async () => {
  const status = document.getElementById("status");

  try {
    const [tab] = await chrome.tabs.query({
      active: true,
      currentWindow: true
    });

    if (!tab?.id) {
      status.textContent = "No active tab.";
      return;
    }

    await chrome.tabs.sendMessage(
      tab.id,
      { type: "TOGGLE_DEVTOOLS_OVERLAY" }
    );

    window.close();
  } catch {
    status.textContent =
      "Use the extension on a localhost development page.";
  }
});
