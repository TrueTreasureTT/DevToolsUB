const { app, BrowserWindow, session } = require("electron");
const path = require("node:path");
const { pathToFileURL } = require("node:url");

function createWindow() {
  const win = new BrowserWindow({
    width: 1400,
    height: 900,
    minWidth: 900,
    minHeight: 650,
    title: "DevTools Overlay",
    webPreferences: {
      contextIsolation: true,
      nodeIntegration: false,
      sandbox: true,
      devTools: true
    }
  });

  const appRoot = path.resolve(__dirname, "../..");
  const distIndex = path.join(appRoot, "dist", "src", "index.html");

  if (require("node:fs").existsSync(distIndex)) {
    win.loadURL(pathToFileURL(distIndex).toString());
  } else {
    win.loadURL("http://localhost:5173/src/index.html");
  }

  win.webContents.setWindowOpenHandler(({ url }) => {
    if (url.startsWith("http://localhost/") || url.startsWith("http://127.0.0.1/")) {
      return { action: "allow" };
    }
    return { action: "deny" };
  });
}

app.whenReady().then(() => {
  session.defaultSession.setPermissionRequestHandler((_webContents, _permission, callback) => {
    callback(false);
  });

  createWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});
