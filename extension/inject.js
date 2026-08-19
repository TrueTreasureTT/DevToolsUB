(() => {
  const ID = "__devtools_overlay_root__";

  function createOverlay() {
    let root = document.getElementById(ID);
    if (root) {
      root.remove();
      return;
    }

    root = document.createElement("div");
    root.id = ID;
    root.style.position = "fixed";
    root.style.top = "12px";
    root.style.right = "12px";
    root.style.zIndex = "2147483647";
    root.style.width = "320px";
    root.style.background = "#11151c";
    root.style.color = "#f5f7fb";
    root.style.border = "1px solid #2b313d";
    root.style.borderRadius = "10px";
    root.style.padding = "12px";
    root.style.font = "13px system-ui,sans-serif";
    root.style.boxShadow = "0 12px 40px rgba(0,0,0,.45)";

    const close = document.createElement("button");
    close.textContent = "Close";
    close.style.float = "right";
    close.onclick = () => root.remove();

    const title = document.createElement("strong");
    title.textContent = "DevTools Overlay";

    const note = document.createElement("p");
    note.textContent = "Extension shell is limited to local/loopback development pages.";

    root.append(title, close, note);
    document.documentElement.appendChild(root);
  }

  window.addEventListener("DEVTOOLS_OVERLAY_TOGGLE", createOverlay);
})();
