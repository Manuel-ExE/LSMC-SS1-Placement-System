const { app, BrowserWindow, shell } = require('electron');
const path = require('path');

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1280,
    height: 840,
    minWidth: 900,
    minHeight: 600,
    title: 'SS1 Department Placement Test System — LSMC Ojo',
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      sandbox: false // needed for IndexedDB in file context inside Electron
    },
    show: false
  });

  mainWindow.once('ready-to-show', () => mainWindow.show());

  // Load the offline app (bundled HTML)
  const htmlPath = path.join(__dirname, '..', 'app', 'index.html');
  mainWindow.loadFile(htmlPath);

  // Open external links in default browser
  mainWindow.webContents.setWindowOpenHandler(({ url }) => {
    shell.openExternal(url);
    return { action: 'deny' };
  });

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) createWindow();
});
