(() => {
  const ROOT_ID = "__devtools_overlay__";

  function toggle() {
    const old = document.getElementById(ROOT_ID);
    if (old) {
      old.remove();
      return;
    }

    const root = document.createElement("section");

    root.id = ROOT_ID;

    Object.assign(root.style, {
      position: "fixed",
      top: "12px",
      right: "12px",
      width: "360px",
      zIndex: "2147483647",
      padding: "14px",
      border: "1px solid #303846",
      borderRadius: "12px",
      background: "#11151c",
      color: "#f5f7fb",
      fontFamily: "system-ui,sans-serif",
      boxShadow: "0 20px 50px rgba(0,0,0,.45)"
    });

    const title = document.createElement("strong");
    title.textContent = "DevTools Overlay";

    const info = document.createElement("p");
    info.textContent =
      "Local debugging overlay for pages you control.";

    const close = document.createElement("button");
    close.textContent = "Close";
    close.onclick = () => root.remove();

    root.append(title, info, close);
    document.documentElement.appendChild(root);
  }

  window.addEventListener("DEVTOOLS_OVERLAY_TOGGLE", toggle);
})();
