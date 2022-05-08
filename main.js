const { app, BrowserWindow, ipcMain, nativeTheme } = require("electron");
const path = require("path");

require("electron-reload")(__dirname, {
  electron: require(`${__dirname}/node_modules/electron`),
});

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    skipTaskbar: true,
    autoHideMenuBar: true,
    alwaysOnTop: true,
    center: true,
    frame: false,
    transparent: true,
    movable: true,
    x: -1,
    y: -1,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
      devTools: true,
    },
  });

  win.setBackgroundColor("#000000");
  win.webContents.setFrameRate(60);

  win.loadFile("index.html");
  ipcMain.handle("dark-mode:toggle", () => {
    if (nativeTheme.shouldUseDarkColors) {
      nativeTheme.themeSource = "light";
    } else {
      nativeTheme.themeSource = "dark";
    }
    return nativeTheme.shouldUseDarkColors;
  });

  ipcMain.handle("dark-mode:system", () => {
    nativeTheme.themeSource = "system";
  });

  ipcMain.handle("app:close", () => {
    app.quit();
  });

  ipcMain.handle("app:drag", () => {
    nativeTheme.themeSource = "system";
  });

  ipcMain.handle("app:devtools:open", () => {
    BrowserWindow.getFocusedWindow().webContents.openDevTools();
  });
}

app.whenReady().then(() => {
  if (process.platform === "linux") {
  }
  setTimeout(function () {
    createWindow();
  }, 300);

  app.on("ready", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      setTimeout(function () {
        createWindow();
      }, 300);
    }
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
