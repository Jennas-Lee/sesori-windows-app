const { app, BrowserWindow } = require('electron');
const url = require('url');
const path = require('path');

let mainWindow = null;

function createWindow() {
    mainWindow = new BrowserWindow({
        width: 1000,
        height: 600,
        frame: false,
        webPreferences: {
            // contextIsolation: true,
            nodeIntegration: true,
            enableRemoteModule: true
        }
    });

    const startURL = process.env.ELECTRON_START_URL || url.format({
        pathname: path.join(__dirname, './build/index.html'),
        protocol: 'file:',
        slashes: true
    });

    if(process.env.NODE_ENV == 'development') {
        mainWindow.webContents.openDevTools();
    }

    mainWindow.loadURL(startURL);
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
    if(process.platform !== 'darwin') {
        app.quit();
    }
})